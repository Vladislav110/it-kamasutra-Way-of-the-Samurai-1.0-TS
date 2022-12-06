import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {ActionsType, DialogPagePropsType} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";

type DialogsPagePropsType = {
    dialogs: DialogPagePropsType
    dispatch: (action: ActionsType) => void
};

export const Dialogs = (props:DialogsPagePropsType) => {

    let dialogsElements = props.dialogs.dialogs
        .map((d,index) => <DialogItem key={index} name={d.name} id={d.id}/>)

    let messagesElement = props.dialogs.messages
        .map((m,index) => <Message key = {index} message={m.message}/>)


    let onSendMassageClick = ()=>{
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange =(event:ChangeEvent<HTMLTextAreaElement>)=> {
        let text = event.currentTarget.value;
        props.dispatch(updateNewMessageBodyCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>{dialogsElements}</div>


            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
                <textarea  onChange={onNewMessageChange} value={props.dialogs.newMessageBody} placeholder="Enter your message"> </textarea>
            </div>
            <div>
                <button onClick={onSendMassageClick}>Send</button>
            </div>
        </div>

    )
}
