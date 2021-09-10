import firebase from 'firebase/app';

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDDaQvxU3mSeYYbxUHO2UaC7x0pBojsr2E",
    authDomain: "proyectof-28971.firebaseapp.com",
    projectId: "proyectof-28971",
    storageBucket: "proyectof-28971.appspot.com",
    messagingSenderId: "911897140806",
    appId: "1:911897140806:web:2d4b0d2f4c32f56bc83447"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
}
        
export const getFirestore = () => {
    return firebase.firestore(app)
}