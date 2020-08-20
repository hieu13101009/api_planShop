import {Message, GET_MESSAGE, HomeActionTypes} from './types';


export function getMessage(newSession: Message): HomeActionTypes {
    return {
        type: GET_MESSAGE,
        payload: newSession
    }
}