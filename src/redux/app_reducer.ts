
import {setAuthThunkCreator} from "./auth_reducer";
import {ThunkDispatch} from "redux-thunk";
import {reducer} from "./redux_store";




const SET_INITIALAZIED = "SET_INITIALAZIED";


type ActionsType = ReturnType<typeof setInitialaziedAC>

export type InitialStateType = typeof initialState

let initialState = {
    initialized:false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALAZIED:
            return {...state, initialized: true}

        default:
            return state
    }
}

export const setInitialaziedAC = () => {
    return {
        type: SET_INITIALAZIED,
    } as const
}



export const initializeAppTC = () => {
    return (dispatch:ThunkDispatch<ReturnType<typeof reducer>, unknown, ActionsType>) => {
        dispatch(setAuthThunkCreator()).then(()=>{
            dispatch(setInitialaziedAC())
        })

    }
}
