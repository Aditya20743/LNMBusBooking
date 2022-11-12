import { config } from './config';
// import firebase from 'firebase/compat/app'
// import * as firebase from "firebase/app";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';


const app = firebase.initializeApp(config);
// export const auth = getAuth(app);
// firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireauth= firebase.auth;
export const db = getFirestore(app);


const settings = {timestampsInSnapshots : true};

firebase.firestore().settings(settings);
export const firestore = firebase.firestore();
export const firebasestore = firebase.firestore;