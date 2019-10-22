const monsterDataReducer=(state=false, action)=>{
    switch (action.type) {
        case 'MONSTER_DATA_LOADED':
            return action.payload;
        case 'MONSTER_DATA_ERROR':
            return false;
        default:
            return state;
    }
};
export default monsterDataReducer;