import Firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyCjzsvWwuKA6gSyNEq_Du5nugod_X2B4uA",
  authDomain: "portfolio-3219e.firebaseapp.com",
  databaseURL: "https://portfolio-3219e.firebaseio.com",
  projectId: "portfolio-3219e",
  storageBucket: "portfolio-3219e.appspot.com",
  messagingSenderId: "872236426301",
  appId: "1:872236426301:web:40d5f2fb4fc0dcf4"
};

export const Fire = Firebase.initializeApp(firebaseConfig)