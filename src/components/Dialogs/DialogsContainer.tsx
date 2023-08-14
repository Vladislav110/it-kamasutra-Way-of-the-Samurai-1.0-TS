import React from "react";
import {InitialStateType, sendMessageCreator} from "../../redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux_store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    dialogsPage: InitialStateType
    // isAuth: boolean
}

type MapDispatchToPropsType = {
    onSendMassageClick: (newMessageBody: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateProps = (state: AppStateType): MapStatePropsType => {

    return {
        dialogsPage: state.dialogsPage
        // isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onSendMassageClick: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose(withAuthRedirect(connect(mapStateProps, mapDispatchToProps)(Dialogs)))