import {combineReducers} from 'redux';

import loggedReducer from './loggedReducer'
import dataReducer from './dataReducer'
import monsterDataReducer from './monsterDataReducer'

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
     monsterData: monsterDataReducer,
     testowaFraza: reducerDz,
});

export default rootReducer;