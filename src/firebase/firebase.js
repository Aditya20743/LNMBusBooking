import { config } from './config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireauth= firebase.auth;

const settings = {timestampsInSnapshots : true};

firebase.firestore().settings(settings);
export const firestore = firebase.firestore();
export const firebasestore = firebase.firestore;