import {v1} from "uuid";


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
}

type ProfilePagePropsType = {
    posts: Array<PostsPropsType>
    newPostText: string
}

export type DialogPagePropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePagePropsType>
}

export type StatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogPagePropsType
}


export let store = {
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
        }
    },

    getState() {
        return store._state
    },

    rerenderEntireTree (_state:StatePropsType) {
    console.log("state changed")
},
    addPost () {
        let newPost = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0}
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this.rerenderEntireTree(this._state)
    },

    changeNewPostText (newPost: string) {
        this._state.profilePage.newPostText = newPost
        this.rerenderEntireTree(this._state)
    },

    subscriber  (observer: (state:StatePropsType)=>void) {
        this.rerenderEntireTree = observer
    }
}


// let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: v1(), message: "Hi, how are you?", likesCount: 22},
//                 {id: v1(), message: "It`s my first post", likesCount: 11},
//                 {id: v1(), message: "It`s my second post", likesCount: 12}
//             ],
//             newPostText: "",
//         },
//
//         dialogsPage: {
//             dialogs: [
//                 {id: v1(), name: 'Vlad'},
//                 {id: v1(), name: 'Andrey'},
//                 {id: v1(), name: 'Sveta'},
//                 {id: v1(), name: 'Sasha'},
//                 {id: v1(), name: 'Kirill'},
//                 {id: v1(), name: 'Sergey'}
//             ],
//
//             messages: [
//                 {id: v1(), message: 'Hi'},
//                 {id: v1(), message: 'How are you'},
//                 {id: v1(), message: 'Wats up man?'},
//                 {id: v1(), message: 'How do you feel?'},
//                 {id: v1(), message: 'How are you?'},
//                 {id: v1(), message: 'Yo'}
//             ],
//             newMessageBody: ''
//         },
//     },
//
//     _callSubscriber() {
//         console.log('State changed')
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer: any) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action: any) {
//         if (action.type === "ADD-POST") {
//             let newPost = {
//                 id: v1(),
//                 message: store._state.profilePage.newPostText,
//                 likesCount: 0
//             }
//
//             this._state.profilePage.posts.push(newPost);
//             this._state.profilePage.newPostText = ''
//             this._callSubscriber(this._state);
//         } else if (action.type === "UPDATE-NEW-POST-TEXT") {
//             this._state.profilePage.newPostText = action.newText;
//             this._callSubscriber(this._state);
//         } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
//             this._state.dialogsPage.newMessageBody = action.body;
//             this._callSubscriber(this._state);
//         } else if (action.type === "SEND-MESSAGE") {
//             let body = this._state.dialogsPage.newMessageBody;
//             this._state.dialogsPage.newMessageBody = '';
//             this._state.dialogsPage.messages.push({id: v1(), message: body})
//             this._callSubscriber(this._state);
//         }
//     }
// }
//
// // - это объект у которого есть свойство ACTION - которое описывает действие, которое надо совершить, у объекта DISPATCH должно быть обязвтельное свойство TYPE: 'ADD-POST' -название действия
//
//
//
// export let addPostActionCreator = () => {
//     return {
//         type: "ADD-POST"
//     }
// }
// export let updateNewPostText = (text: string | undefined) => {
//     return {
//         type: "UPDATE-NEW-POST-TEXT",
//         newText: text
//     }
// }
// export let sendMessageCreator = () => {
//     return {
//         type: "SEND-MESSAGE"
//     }
// }
//
// export let updateNewMessageBodyCreator = (body: string | undefined) => {
//     return {
//         type: "UPDATE-NEW-MESSAGE-BODY",
//         body: body
//     }
// }