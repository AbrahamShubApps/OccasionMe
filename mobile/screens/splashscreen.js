import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkIfLoggedIn: () => {
      dispatch(Actions.checkUserLogin());
    },
    updateUser: userData => {
      dispatch(Actions.updateUser(userData));
    },
  };
};
class SplashScreen extends React.Component {}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
