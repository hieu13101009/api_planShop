import { combineReducers } from 'redux';

const reducer = (state = {}, action: {type: string}) => {
    if(action.type === 'test') return state;
    return state;
}
const RootReducer = combineReducers({
    test: reducer,
});

export default RootReducer;