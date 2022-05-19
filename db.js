//Adding FireBase

import firebase from 'firebase';
import {firebaseConfig} from './config.js';

const db = firebase.initializeApp(firebaseConfig);
export default db;