import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDjqHLoHKja3Qun37ekRuL4B43NAXBicjY",
  authDomain: "family-4fcc2.firebaseapp.com",
  projectId: "family-4fcc2",
  storageBucket: "family-4fcc2.appspot.com",
  messagingSenderId: "275419633755",
  appId: "1:275419633755:web:62ab72895d9d35fe0b477e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
