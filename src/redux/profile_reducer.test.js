import {addPostActionCreator, profileReducer} from "./profile_reducer";
import {v1} from "uuid";


let initialState = {
    posts: [
        {id: v1(), message: "Hi, how are you?", likesCount: 22},
        {id: v1(), message: "It`s my first post", likesCount: 11},
        {id: v1(), message: "It`s my second post", likesCount: 12}
    ]
}

let action = addPostActionCreator("IT-Incubator")


it("new post should be added", () => {

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(4)

})

it("post message should be -'IT-Incubator'", () => {

    let action = addPostActionCreator("IT-Incubator")

    let newState = profileReducer(initialState, action)

    expect(newState.posts[3].message).toBe("IT-Incubator")
})