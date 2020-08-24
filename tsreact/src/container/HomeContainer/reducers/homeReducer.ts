import {
    HomeType,
    HomeDispatchTypes,
    GET_MESSAGE,
    GET_MESSAGE_SUCCESS, GET_MESSAGE_FAIL,
    Message,
} from '../actions/types'


interface HomeState {
    messages?: Message
}

// const defaultState: HomeState = {
//     messages: []
//     // messages:[]
// };

export function homeReducer(state = {messages: []}, action: HomeDispatchTypes)  {
    switch (action.type) {
        case GET_MESSAGE:
            return state.messages;
        case GET_MESSAGE_SUCCESS:
            return {
                messages: action.payload
            }
        case GET_MESSAGE_FAIL:
            return state
        default:
            return state
    }
}