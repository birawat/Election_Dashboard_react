
import {
  INCREMENT,
  DECREMENT,
  payload
  } from '../constants';


export const incrementCount=(name) => {
  debugger;
  return {
    type: INCREMENT,
    payload:{
      name: name
    }
  };
}

export const decrementCount=(name) => {
  return {
    type: DECREMENT,
    payload:{
      name: name
    }
  };
}