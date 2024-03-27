import firebase from 'firebase';

/*
const firebaseConfig = {
  apiKey: "AIzaSyCiS01VXno38ikgS2kOb17pf_ECDPxEUMg",
  authDomain: "wireless-buzzer-app-b3578.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-app-b3578-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-app-b3578",
  storageBucket: "wireless-buzzer-app-b3578.appspot.com",
  messagingSenderId: "816391038528",
  appId: "1:816391038528:web:a73e0a307a449ad26ea1a5",
  measurementId: "G-7JQZQLY3E5"
};
*/
const firebaseConfig = {
  apiKey: "AIzaSyCJEq_cxVyQ5dGBsSPc71Xxw8riUyb0NNs",
  authDomain: "projeto60-19bea.firebaseapp.com",
  databaseURL: "https://projeto60-19bea-default-rtdb.firebaseio.com",
  projectId: "projeto60-19bea",
  storageBucket: "projeto60-19bea.appspot.com",
  messagingSenderId: "569353351408",
  appId: "1:569353351408:web:db26728852c54ae0209235"
};


// Inicialize o Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()