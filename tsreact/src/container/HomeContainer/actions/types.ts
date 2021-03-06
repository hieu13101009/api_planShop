export const GET_MESSAGE = 'GET_MESSAGE'
export const GET_MESSAGE_SUCCESS = 'GET_MESSAGE_SUCCESS'
export const GET_MESSAGE_FAIL = 'GET_MESSAGE_FAIL'


export type HomeType = {
    mess: Message[],
    ping: PingType
}

export type Message = {
    messi: {
        id?: number
        user?: string
        message?: string
        timestamp?: string
    }
}

export type PingType = {
    pingi?: string
}

export interface GetMessageAction {
    type: typeof GET_MESSAGE,
}

export interface GetMessageSuccessAction {
    type: typeof GET_MESSAGE_SUCCESS,
    payload: HomeType,
}

export interface GetMessageFailAction {
    type: typeof GET_MESSAGE_FAIL,
}

export type HomeDispatchTypes = GetMessageAction | GetMessageFailAction | GetMessageSuccessAction