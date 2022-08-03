import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPost, IUser} from "../../types";

export interface IState {
    posts: IPost[]
    users: IUser[]
}

const initialState: IState = {
    posts: [],
    users: [],
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPosts(state, action: PayloadAction<IPost[]>) {
            state.posts = action.payload
        },
        getUsers(state, action: PayloadAction<IUser[]>) {
            state.users = action.payload
        }
    }
})

export const {getPosts, getUsers} = postSlice.actions
export default postSlice.reducer
