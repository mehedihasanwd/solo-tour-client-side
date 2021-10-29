import { initializeApp } from "firebase/app";
import firebaseConfig from "../Firebase/firebase.config";

const firebaseInit = () => {
  initializeApp(firebaseConfig);
};

export default firebaseInit;
