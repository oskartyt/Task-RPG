import {combineReducers} from 'redux';

import loggedReducer from './loggedReducer'
import dataReducer from './dataReducer'

const reducerDz=(state='Działa', action)=>{
    switch (action.type) {
        case 'WORKS':
            return 'nadal działa';
        case 'SAY':
            return 'Przeciez mówię, że działa';
        default:
            return state
    }
};



 const rootReducer = combineReducers({
     loggedIn: loggedReducer,
     userData: dataReducer,
     testowaFraza: reducerDz,
});

export default rootReducer;