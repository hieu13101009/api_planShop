export const GET_MESSAGE = 'GET_MESSAGE'

export interface Message {
    user: string
    message: string
    timestamp: string
}

export interface HomeState {
    messages: Message[]
}

interface GetMessageAction {
    type: typeof GET_MESSAGE,
    payload: Message
}


export type HomeActionTypes = GetMessageAction