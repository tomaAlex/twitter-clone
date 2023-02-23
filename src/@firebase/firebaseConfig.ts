// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB8gvIwJfoC8RUd_jTWzkHK8AgX5En6wYg",
	authDomain: "twitter-c49be.firebaseapp.com",
	projectId: "twitter-c49be",
	storageBucket: "twitter-c49be.appspot.com",
	messagingSenderId: "827904597190",
	appId: "1:827904597190:web:bb46a3c3436230bd780bc7",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
