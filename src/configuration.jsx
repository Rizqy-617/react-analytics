// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ReactGA from 'react-ga';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdJRkTsaCY0gMbbNDA2KsqLw3K1beq1to",
  authDomain: "test-analytics-fb1d0.firebaseapp.com",
  projectId: "test-analytics-fb1d0",
  storageBucket: "test-analytics-fb1d0.firebasestorage.app",
  messagingSenderId: "842109981574",
  appId: "1:842109981574:web:c536b51e8319fdbd855207",
  measurementId: "G-F4LZ1R1KEK"
};

const TRACKING_ID = "G-F4LZ1R1KEK";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
ReactGA.initialize(TRACKING_ID);

export default analytics;