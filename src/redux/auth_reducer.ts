import {getAuth, loginUser, logoutUser} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {reducer} from "./redux_store";
import {Dispatch} from "redux";
import {FormDataType} from "../components/Login/Login";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "SET_USER_DATA";
const LOGOUT_USER = "LOGOUT_USER_DATA"

type ActionsType = ReturnType<typeof setUserDataActionCreator> | ReturnType<typeof logoutActionCreator>

export type InitialStateType = typeof initialState

let initialState = {
    userId: null,
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        case LOGOUT_USER:
            return {...state, isAuth: action.isAuth}
        default:
            return state
    }
}

export const setUserDataActionCreator = (data: InitialStateType) => {
    return {
        type: SET_USER_DATA,
        data: data
    } as const
}

export const logoutActionCreator = (isAuth: boolean) => {
    return {
        type: LOGOUT_USER,
        isAuth: isAuth
    } as const
}


export const setAuthThunkCreator = () => async (dispatch: Dispatch<ActionsType>) => {
    const response = await getAuth();
    if (response.data.resultCode === 0) {
        dispatch(setUserDataActionCreator(response.data.data))
    }
}

export const login = (data: FormDataType): ThunkAction<void, ReturnType<typeof reducer>, unknown, ActionsType> => {
    return async (dispatch: ThunkDispatch<ReturnType<typeof reducer>, unknown, ActionsType>) => {
        try {
            const response = await loginUser(data);
            if (response.data.resultCode === 0) {
                dispatch(setAuthThunkCreator());
            } else {
                const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
                let action: any = stopSubmit("login", {_error: message})
                dispatch(action)
            }
        } catch (error) {
            console.log("Incorrect Email or Password")
        }
    };
}

export const logout = () => async (dispatch: ThunkDispatch<ReturnType<typeof reducer>, unknown, ActionsType>) => {
    let response = await logoutUser();
    if (response.data.resultCode === 0) {
        dispatch(logoutActionCreator(false))
    }
}




