import {GET_MESSAGE, HomeActionTypes} from './types';


export function getMessage(): HomeActionTypes {
    console.log('getMessage');
    return {
        type: GET_MESSAGE,
    }
}