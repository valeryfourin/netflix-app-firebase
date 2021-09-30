/* eslint-disable eslint-comments/disable-enable-pair */ /* eslint-disable prettier/prettier */
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBiOzrPpajoNcU7c2dDvm4gRuIbe1pxHSE',
  authDomain: 'netflix-6f111.firebaseapp.com',
  projectId: 'netflix-6f111',
  storageBucket: 'netflix-6f111.appspot.com',
  messagingSenderId: '139287678198',
  appId: '1:139287678198:web:0314b7c33075902172f0d7',
  measurementId: 'G-S2THSZ1DF0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authUser = firebase.auth();

export { authUser };
export default database;
