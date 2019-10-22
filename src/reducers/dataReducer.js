const dataReducer=(state=false, action)=>{
    switch (action.type) {
        case 'DATA_LOADED':
            return action.payload;
        case 'DATA_ERROR':
            return false;
        default:
            return state;
    }
};
export default dataReducer;