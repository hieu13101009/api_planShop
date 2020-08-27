import {
    HomeType,
    PingType,
    HomeDispatchTypes,
    GET_MESSAGE,
    GET_MESSAGE_SUCCESS, GET_MESSAGE_FAIL,
} from '../actions/types'


interface HomeState {
    messages?: HomeType
    ping? : PingType
}

const defaultState: HomeState = {};

export function homeReducer(state: HomeState = defaultState, action: HomeDispatchTypes): HomeState  {
    switch (action.type) {
        case GET_MESSAGE:
            return state;
        case GET_MESSAGE_SUCCESS:
            return {
                messages: action.payload,
                ping: action.payload.ping
            }
        case GET_MESSAGE_FAIL:
            return state
        default:
            return state
    }
}