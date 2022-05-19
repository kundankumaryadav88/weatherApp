//Adding FireBase

import firebase from 'firebase';
import {firebaseConfig} from './config.js';

const dbs = firebase.initializeApp(firebaseConfig);
export default dbs;