import {
    INCREMENT,
    DECREMENT,
    } from '../constants';

const initialState = {
    Binod : { id: 1, name: 'Binod', score: 30 },
    Amit : { id: 2, name: 'Amit', score: 30 },
    Suman : { id: 3, name: 'Suman', score: 30 },
    Modi: { id: 4, name: 'Modi', score: 30 },
    Sah: { id:5, name: 'Sah', score: 30}
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        
        
        case INCREMENT:
            let key = action.payload.name;
            state[key].score += 1;
            return {
                ...state
            };
           
            
            case DECREMENT:
                
                let key1 = action.payload.name;
                state[key1].score -= 1;
                return {
                    ...state
                };
               
                default: 
            return state;
    }
}

export default postReducer;