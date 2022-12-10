import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";

import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map((d, index) => {
            return <DialogItem key={index} name={d.name} id={d.id}/>
        })

    let messagesElement = props.dialogsPage.messages
        .map((m, index) => {
            return <Message key={index} message={m.message}/>
        })


    let onSendMassageClick = () => {
        props.onSendMassageClick()
    }

    let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {

        let text = event.currentTarget.value;
        props.updateNewMessageBody(text)
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
                <textarea onChange={onNewMessageChange} value={props.dialogsPage.newMessageBody}
                          placeholder="Enter your message"> </textarea>
            </div>
            <div>
                <button onClick={onSendMassageClick}>Send</button>
            </div>
        </div>

    )
}
