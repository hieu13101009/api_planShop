import {
    HomeState,
    HomeActionTypes,
    GET_MESSAGE,
} from '../actions/types'

const initialState: HomeState = {
    messages: [{
        user: 'Good Morning',
        message: 'Chào buổi sáng',
        timestamp: Date(),
    }]
}

export function homeReducer( state = initialState, action: HomeActionTypes): HomeState {
    switch (action.type) {
    case GET_MESSAGE:
        return {
            messages: [...state.messages]
        }
    default:
        return state
    }
}