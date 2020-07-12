import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCTVwfSKY-9UkLemBaJCXMO4yiHS9s_AH8",
  authDomain: "expensify2020app.firebaseapp.com",
  databaseURL: "https://expensify2020app.firebaseio.com",
  projectId: "expensify2020app",
  storageBucket: "expensify2020app.appspot.com",
  messagingSenderId: "806094788703",
  appId: "1:806094788703:web:2637444f513a28e8c0a3ea",
  measurementId: "G-CPHYDKCZVX",
};

firebase.initializeApp(config);

database.ref().set({
  name: "Andrew Mead",
  age: 26,
  isSingle: false,
  location: {
    city: "Philadelphia",
    country: "United States",
  },
});

// database.ref().set('This is my data.');

database.ref("age").set(27);
database.ref("location/city").set("New York");

database.ref("attributes").set({
  height: 73,
  weight: 150,
});

console.log("I made a request to change the data.");
