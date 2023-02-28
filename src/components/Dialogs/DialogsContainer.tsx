import React from "react";
import {InitialStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux_store";
import {Dispatch} from "redux";


type MapStatePropsType ={
    dialogsPage:InitialStateType
    isAuth:boolean
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (newMessageBody:string)=>void
    onSendMassageClick: ()=>void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateProps = (state:AppStateType):MapStatePropsType=> {

    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType=> {
    return {
        onSendMassageClick : ()=>{
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (newMessageBody:string)=> {
            dispatch(updateNewMessageBodyCreator(newMessageBody))
        }
    }
}
const DialogsContainer = connect(mapStateProps,mapDispatchToProps) (Dialogs)

export default DialogsContainer