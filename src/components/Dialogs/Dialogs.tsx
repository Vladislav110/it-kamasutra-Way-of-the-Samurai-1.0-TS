import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";


export type FormNewMessageType = {
    newMessageBody: string
}

export const AddMessageForm: React.FC<InjectedFormProps<FormNewMessageType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormNewMessageType>({form: "dialogAddMessageForm"})(AddMessageForm)

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map((d, index) => {
            return <DialogItem key={index} name={d.name} id={d.id}/>
        })

    let messagesElement = props.dialogsPage.messages
        .map((m, index) => {
            return <Message key={index} message={m.message}/>
        })

    let addNewMessage = (values:FormNewMessageType) => {
        props.onSendMassageClick(values.newMessageBody)
    }

    // if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElement}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}




