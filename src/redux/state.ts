import {v1} from "uuid";
import {addPostActionCreator, changeNewPostTextActionCreator, profileReducer} from "./profile_reducer";
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs_reducer";

type DialogPropsType = {
    id: string
    name: string
};
type MessagePagePropsType = {
    id: string
    message: string
};
type PostsPropsType = {
    id: string,
    message: string
    likesCount: number
};
export type ProfilePagePropsType = {
    posts: Array<PostsPropsType>
    newPostText: string
};
export type DialogPagePropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePagePropsType>
    newMessageBody: string
};
export type StatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogPagePropsType
};

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>;


export type StorePropsType = {
    _state: StatePropsType
    getState: () => StatePropsType
    subscriber: (observer: () => void) => void
    _callSubscriber: () => void
    dispatch: (action: ActionsType) => void
}

export let store: StorePropsType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: "Hi, how are you?", likesCount: 22},
                {id: v1(), message: "It`s my first post", likesCount: 11},
                {id: v1(), message: "It`s my second post", likesCount: 12}
            ],
            newPostText: " "
        },

        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Vlad'},
                {id: v1(), name: 'Andrey'},
                {id: v1(), name: 'Sveta'},
                {id: v1(), name: 'Sasha'},
                {id: v1(), name: 'Kirill'},
                {id: v1(), name: 'Sergey'}
            ],

            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How are you'},
                {id: v1(), message: 'Wats up man?'},
                {id: v1(), message: 'How do you feel?'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'Yo'}
            ],
            newMessageBody: ""
        }
    },

    getState() {
        return store._state
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber() {
        console.log("state changed")
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    }
}






// // - это объект у которого есть свойство ACTION - которое описывает действие, которое надо совершить, у объекта DISPATCH должно быть обязвтельное свойство TYPE: 'ADD-POST' -название действия

