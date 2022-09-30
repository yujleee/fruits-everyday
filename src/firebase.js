import { initializeApp, getApp, getApps } from 'firebase/app';
import { getStore } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA1WsRv-c6_ixlaw7CtGpcexa4TFYib6Ag',
  authDomain: 'fruits-everyday.firebaseapp.com',
  projectId: 'fruits-everyday',
  storageBucket: 'fruits-everyday.appspot.com',
  messagingSenderId: '421840036393',
  appId: '1:421840036393:web:e42e492ea957f1010bb238',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default app;
