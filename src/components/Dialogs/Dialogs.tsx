import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";


type DialogPagePropsType = {
    dialogs: Array<{id: string, name: string}>
    messages: Array<{id: string, message: string}>
};


export const Dialogs = (props:DialogPagePropsType) => {

    let dialogsElements = props.dialogs
        .map((d,index) => <DialogItem key={index} name={d.name} id={d.id}/>)

    let messagesElement = props.messages
        .map((m,index) => <Message key = {index} message={m.message}/>)


    let onSendMassageClick = ()=>{
        // props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange =(event:ChangeEvent<HTMLTextAreaElement>)=> {
        let text = event.currentTarget.value;
        // props.dispatch(updateNewMessageBodyCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
                <textarea value={"newMessageBody"} onChange={onNewMessageChange}></textarea>
            </div>
            <div>
                <button onClick={onSendMassageClick}>Add message</button>
            </div>
        </div>

    )
}
