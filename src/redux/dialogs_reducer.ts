import {v1} from "uuid";
import {ActionsType} from "./store";

const SEND_MESSAGE = "SEND-MESSAGE";

type DialogPropsType = {
    id: string
    name: string
};
type MessagePagePropsType = {
    id: string
    message: string
};


let initialState = {
    dialogs: [
        {id: v1(), name: 'Vlad'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Kirill'},
        {id: v1(), name: 'Sergey'}
    ] as Array<DialogPropsType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you'},
        {id: v1(), message: 'Wats up man?'},
        {id: v1(), message: 'How do you feel?'},
        {id: v1(), message: 'How are you?'}
    ] as Array<MessagePagePropsType>
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let messageBody = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: '1', message: messageBody}]
            }
        default:
            return state
    }
}

export let sendMessageCreator = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody: newMessageBody
    } as const
}