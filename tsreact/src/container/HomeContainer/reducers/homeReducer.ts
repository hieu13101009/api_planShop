import {
    HomeType,
    HomeDispatchTypes,
    GET_MESSAGE,
    GET_MESSAGE_SUCCESS, GET_MESSAGE_FAIL
} from '../actions/types'


interface HomeState {
    messages?: HomeType[]
}
  
const defaultState: HomeState = {
    messages:[]
};

export function homeReducer(state: HomeState = defaultState, action: HomeDispatchTypes): HomeState  {
    switch (action.type) {
        case GET_MESSAGE:
            return {
                messages:[]
            }
        case GET_MESSAGE_SUCCESS:
            return {
                messages: [action.payload]
            }
        case GET_MESSAGE_FAIL:
            return {
                messages:[]
            }
        default:
            return state
    }
}