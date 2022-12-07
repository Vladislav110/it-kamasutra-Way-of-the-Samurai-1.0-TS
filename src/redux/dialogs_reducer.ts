import {v1} from "uuid";
import {ActionsType, DialogPagePropsType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        {id: v1(), name: 'Vlad'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Kirill'},
        {id: v1(), name: 'Sergey'}
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you'},
        {id: v1(), message: 'Wats up man?'},
        {id: v1(), message: 'How do you feel?'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Yo'}
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state: DialogPagePropsType = initialState, action: ActionsType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody
            return state
        case SEND_MESSAGE:
            let messageBody = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: v1(), message: messageBody})
            return state
        default:
            return state
    }
}

export let updateNewMessageBodyCreator = (newMessageBody: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessageBody: newMessageBody
    } as const
}

export let sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}