import {TABLE_GRID} from '../constants'
// import {Linechart_GRID} from '../constants'
// import {Piechart_GRID} from '../constants'
// import {Sidebar_GRID} from '../constants'
import {
  INCREMENT,
  DECREMENT,
  payload
  } from '../constants';

export const tableGrid =(data)=>{
    
    return {
        type:TABLE_GRID,
        data:data
    }

}

export const incrementCount=(name) => {
  debugger;
  return {
    type: INCREMENT,
    payload:{
      name: name
    }
  };
}

export const decrementCount=(name, index) => {
  return {
    type: DECREMENT,
    payload: {index}
  };
}