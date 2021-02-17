import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {createStore} from 'redux'


// 2. ACTION - increment (it is just a posibility it is not executed (it could also be decrement, multiply...))
// ACTION is a function that return an Object
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}
// 3. REDUCER - will check Action to modify Store (takes 2 params - state, action)
const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
  }
}
// 1. STORE => global state
let store = createStore(counter)
//display it in the console
store.subscribe(() => console.log(store.getState()))
// 4. DISPATCH - execute Action (dispatch that Action to Reducer)
store.dispatch(increment())

ReactDOM.render(<App />, document.getElementById("root"));
