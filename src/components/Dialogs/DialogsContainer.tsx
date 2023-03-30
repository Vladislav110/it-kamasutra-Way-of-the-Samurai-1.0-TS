import React from "react";
import {InitialStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux_store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (newMessageBody: string) => void
    onSendMassageClick: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateProps = (state: AppStateType): MapStatePropsType => {

    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onSendMassageClick: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (newMessageBody: string) => {
            dispatch(updateNewMessageBodyCreator(newMessageBody))
        }
    }
}

export default compose(withAuthRedirect(connect(mapStateProps, mapDispatchToProps)(Dialogs)))