// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAW_ciz81BnwXcjk6UAfmNBuIGjVwAzbwI',
  authDomain: 'shiratama-works.firebaseapp.com',
  projectId: 'shiratama-works',
  storageBucket: 'shiratama-works.appspot.com',
  messagingSenderId: '842684751361',
  appId: '1:842684751361:web:538ab301fc0f28cb4d6a00',
  measurementId: 'G-LQB5H458R7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
