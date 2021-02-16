import React from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// initialize firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEwccfxaXXMvV4by_wqlResyi8maOo8Kg",
  authDomain: "grace-4f74d.firebaseapp.com",
  databaseURL: "https://grace-4f74d.firebaseio.com",
  projectId: "grace-4f74d",
  storageBucket: "grace-4f74d.appspot.com",
  messagingSenderId: "178872682841",
  appId: "1:178872682841:web:7a67eeb43b780ba812e448"
};

// main firebase class
export default class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.database();
  }
}

// create context to use firebase functions
const FirebaseContext = React.createContext(null);
export { FirebaseContext };

// create firebase hoc to expose firebase function to other classes
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);
