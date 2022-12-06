import {v1} from "uuid";
import {ActionsType, DialogPagePropsType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";


export const dialogsReducer = (state: DialogPagePropsType, action: ActionsType) => {

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