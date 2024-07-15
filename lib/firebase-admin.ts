import * as admin from 'firebase-admin';
import { firebaseConfig } from '../firebase.config';

if (!admin.apps.length) {
  admin.initializeApp(firebaseConfig)
}

export default admin;