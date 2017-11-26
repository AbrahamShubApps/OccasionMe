const firebase = require('firebase');

// Initialize Firebase for the application
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

module.exports = {
  authenticate: (req, res, next) => {
    console.log(firebase.auth())
    var user = firebase.auth().currentUser;
    console.log(user);
    if (user !== null) {
      req.user = user;
      next();
    } else {
      res.status(401).send({ message: 'Not logged in' });
    }
  }
}