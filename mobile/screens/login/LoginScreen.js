import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, ScrollView, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Expo, { Permissions, Notifications } from 'expo';
import firebase from 'firebase';
import * as Actions from '../../redux/actions';
import Container from '../../components/Container';
import Button from '../../components/Button';
import config from '../../config/config';
import AppStyles from '../../styles/AppStyles.js';
import LoginStyles from '../../styles/LoginStyles.js';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    checkIfLoggedIn: () => {
      dispatch(Actions.checkUserLogin());
    },
    updateUser: userData => {
      dispatch(Actions.updateUser(userData));
    },
  };
};

class Login extends Component {
  static navigationOptions = { header: null };

  state = {
    email: '',
    password: '',
  };

  componentWillMount() {
    // Check if user is authenticated
    this.props.checkIfLoggedIn();
  }

  componentWillUpdate(nextProps, nextState) {
    // If logged in, Navigate to main view
    if (nextProps.isLoggedIn === true) {
      this.notifications();
      this._navigateTo('Main');
    }
  }

  async notifications() {
    console.log('notifications splash');

    const { existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      return;
    }

    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token);

    this.props.user.token = token;
    console.log('token', this.props.user.token);
    this.props.updateUser(this.props.user);
  }

  pressLoginWithFb() {
    this.loginWithFacebook();
  }

  pressLoginWithEmail() {
    this.login(this.state.email, this.state.password);
  }

  pressSignup() {
    this.props.navigation.navigate('Signup');
  }

  async loginWithFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      config.facebook.API_KEY,
      { permissions: ['public_profile', 'email'] }
    );
    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      // Sign in with credential from the Facebook user.
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch(error => {
          // Handle Errors here.
          console.log('Error with fb login', error);
        });
      console.log('Credential from fb', credential);
    }
  }

  async login(email, pass) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, pass);
      console.log('Logged In!');
    } catch (error) {
      console.log('Error logging in with email:', error.toString());
      Alert.alert('Error', error.message, [{ text: 'OK', onPress: () => {} }]);
    }
  }

  _navigateTo(routeName) {
    console.log('here');
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })],
    });
    this.props.navigation.dispatch(actionToDispatch);
  }

  render() {
    return (
      <ScrollView style={LoginStyles.container}>
        <Container>
          <Text style={LoginStyles.title}>OurCity</Text>
        </Container>
        <Container>
          <Text style={LoginStyles.buttonWhiteText}>Email</Text>
          <TextInput
            style={LoginStyles.textInput}
            autoCapitalize="none"
            onChangeText={text => this.setState({ email: text })}
          />
        </Container>
        <Container>
          <Text style={LoginStyles.buttonWhiteText}>Password</Text>
          <TextInput
            secureTextEntry
            style={LoginStyles.textInput}
            onChangeText={text => this.setState({ password: text })}
          />
        </Container>
        <Container>
          <Button
            label="Sign In"
            styles={{
              button: [LoginStyles.primaryColor, LoginStyles.standardButtonSize],
              label: LoginStyles.buttonWhiteText,
            }}
            onPress={this.pressLoginWithEmail.bind(this)}
          />
        </Container>
        <Container>
          <Button
            styles={{ button: [LoginStyles.facebookColor, LoginStyles.standardButtonSize] }}
            onPress={this.pressLoginWithFb.bind(this)}>
            <View style={LoginStyles.inline}>
              <Icon name="facebook-official" size={30} color="white" />
              <Text style={LoginStyles.buttonWhiteText}>{'  '}Connect </Text>
              <Text style={LoginStyles.buttonWhiteText}>with Facebook</Text>
            </View>
          </Button>
        </Container>
        <Container>
          <Button
            label="New user? Sign up"
            styles={{ label: LoginStyles.signupLink }}
            onPress={this.pressSignup.bind(this)}
          />
        </Container>
      </ScrollView>
    );
  }
}

/*
  <Container>
    <Button
      label="Forgot Login/Pass"
      styles={{ label: LoginStyles.label }}
      onPress={this.pressLoginWithFb.bind(this)}
    />
  </Container>
*/
export default connect(mapStateToProps, mapDispatchToProps)(Login);
