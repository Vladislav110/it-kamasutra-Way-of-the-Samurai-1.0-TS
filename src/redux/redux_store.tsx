import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {usersReducer} from "./users_reducer";
import {authReducer} from "./auth_reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

export type AppStateType = ReturnType<typeof reducer>

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store


