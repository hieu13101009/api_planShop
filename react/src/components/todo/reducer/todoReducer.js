import {
    TODO
} from '../action/index';

const initialState = {
    example: 'Welcome todo example',
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TODO': {
            return {
                example: action.todo.example
            };
        }
        default:
            return state;
    }
}

export default todoReducer;