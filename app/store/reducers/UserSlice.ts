import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAdmin} from "../../types";

interface IState {
    isAuth: boolean
    user: string
    admin: IAdmin
}

export const initialState: IState = {
    isAuth: false,
    user: '',
    admin: {
        login: 'admin',
        password: 'root'
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
    }
})

export const {setIsAuth} = userSlice.actions
export default userSlice.reducer
