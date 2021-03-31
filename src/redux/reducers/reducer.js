import {
    TABLE_GRID,
    INCREMENT,
    DECREMENT,
    } from '../constants';

const initialState = {
    "Binod" : { id: 1, name: 'Binod', score: 0 },
    'Amit' : { id: 2, name: 'Amit', score: 0 },
    'Suman' : { id: 3, name: 'Suman', score: 0 },
    'Modi': { id: 4, name: 'Modi', score: 50 },
    'Sah': { id:5, name: 'Sah', score: 0}
}

const postReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case TABLE_GRID:
            return null
        
        case INCREMENT:
            debugger;
            let key = action.payload.name;
            let obj = state.key;
            obj.score += 1; 
            return {
                ...state,
                ...obj 
            };
            //  return state.score.map((item, i) => {
            //      if(action.payload.index === i) {
            //          return item +=1
            //      }
            //      return item
            //  });
            
             case DECREMENT:
                 debugger
                return state.score.map((item, i) => {
                    if(action.payload.index === i) {
                        return item -=1
                    }
                    return item
                });
               
                default: 
            return state;
        // case Linechart_GRID:
        //     return [
        //         ...state,
        //         { gridData: action.data }
        //     ]
        // case Piechart_GRID:
        //     return [
        //         ...state,
        //         { gridData: action.data }
        //     ]
        // case Sidebar_GRID:
        //     return [
        //         ...state,
        //         { gridData: action.data }
        //     ]


    }
}

export default postReducer;