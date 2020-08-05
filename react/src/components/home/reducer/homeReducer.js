import {
    HOME
} from '../action/index';

const homeReducer = (state = {}, action) => {
    switch(action.type) {
        case HOME:
            return {
                state
            };
        default:
            return state;
    }
}
export default homeReducer;