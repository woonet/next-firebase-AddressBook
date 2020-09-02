import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import firebase from "firebase";

// Firebase設定
const firebaseConfig = {
  apiKey: "XXXxxx999",
  authDomain: "xxx.firebaseapp.com",
  databaseURL: "https://xxx.firebaseio.com",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "999",
  appId: "1:999:web:000xxx",
  measurementId: "G-XXX",
};

// Firebase初期化
var fireapp;
try {
  fireapp = firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.log(error.message);
}
export default fireapp;

// ステート初期値
const initial = {
  login: false,
  username: "(click here!)",
  email: "",
  data: [],
  items: [],
};

// レデューサー
function fireReducer(state = initial, action) {
  switch (action.type) {
    // ダミー
    case "UPDATE_USER":
      return action.value;
    // デフォルト
    default:
      return state;
  }
}

// initStore関数
export function initStore(state = initial) {
  return createStore(fireReducer, state, applyMiddleware(thunkMiddleware));
}
