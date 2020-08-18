import {
    HOME
} from '../action/index';

const homeReducer = (state = {}, action: { type: any; }) => {
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