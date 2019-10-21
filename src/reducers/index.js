import {combineReducers} from 'redux';

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

const loggedReducer=(state=false, action)=>{
    switch (action.type) {
        case 'LOGGED_IN':
            return true;
        case 'LOGGED_OUT':
            return false;
        default:
            return state;
    }
}

 const rootReducer = combineReducers({
    loggedIn: loggedReducer,
    testowaFraza: reducerDz
});

export default rootReducer;