import {
  CognitoUserPool, CognitoUserAttribute, CognitoUser
} from 'amazon-cognito-identity-js';

const cognitoOptions = {
  UserPoolId : 'us-east-2_kqH8kkmvW',
  ClientId : '7d2i0fhcg026pienp5j88vbhug'
};
const userPool = new CognitoUserPool(cognitoOptions);

const toCognitoAttrs = (attrs) => {
  const attributeList = [];
  for (key in attrs) {
    attributeList.push({
      Name: key,
      Value: attrs[key],
    });
  }
  return attributeList;
};
// var cognitoUser = userPool.getCurrentUser();
// console.log(cognitoUser)

//
// var dataEmail = {
//     Name : 'email',
//     Value : 'menachem@mydomain.com'
// };
//
// var dataPhoneNumber = {
//     Name : 'phone_number',
//     Value : '+13472222222'
// };
// var attributeEmail = new CognitoUserAttribute(dataEmail);
// var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
//
// attributeList.push(attributeEmail);
// attributeList.push(attributePhoneNumber);
const getUser = (email, password, attributes = {}) => {
  const attributeList = toCognitoAttrs(attributes)
  return new Promise((resolveCb, rejectCb) => {
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        rejectCb(err);
      } else {
        console.log('result: ')
        console.log(result)
        resolveCb(result.user);
      }
    });
  });
};

const getSession = (user) => {
  debugger
  return new Promise((resolveCb, errorCb) => {
    if (user === null) {
      errorCb();
      return;
    }
    user.getSession((err, session) => {
      if (err) {
        console.error(err);
        errorCb(err);
        return;
      }
      console.log('session validity: ' + session.isValid());
      console.log(user);
      console.log(session);
      resolveCb(session, user);
    });
  });
}

export const signUp = (email, password, attributes = {}) => {
  return getUser(email, password, attributes)
    .then(getSession)
}

signUp('sdfgaksjfdaadfgadfgadfdghaiuRfghOSUdrfjoirfgjoaeRSfgjioSjfp@test.com'.slice(Math.random() * 20), 'password');

// export const signUp = (email, password, attributes = {}) => {
//   const attributeList = toCognitoAttrs(attributes)
//   return new Promise((resolveCb, errorCb) => {
//     userPool.signUp(email, password, attributeList, null, (err, result) => {
//       if (err) {
//           errorCb(err);
//           return;
//       }
//       cognitoUser = result.user;
//       console.log('user name is ' + cognitoUser.getUsername());
//
//       if (cognitoUser != null) {
//         cognitoUser.getSession((err, session) => {
//           if (err) {
//             errorCb(err);
//             return;
//           }
//           console.log('session validity: ' + session.isValid());
//           console.log(cognitoUser);
//           console.log(session);
//           resolveCb(session, cognitoUser);
//         });
//       }
//     });
//   })
// }
