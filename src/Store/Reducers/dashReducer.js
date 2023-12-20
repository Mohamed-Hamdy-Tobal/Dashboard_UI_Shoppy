import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkState: false,
    chat: false,
    cart: false,
    userProfile: false,
    Notification: false,
    activeMenu: true
}

const countriesSlice = createSlice({
    name: 'countriesSlice',
    initialState,
    reducers: {
        darkMood : (state) => {
            state.darkState =!state.darkState
        },
        menuToggler : (state) => {
            state.activeMenu =!state.activeMenu
        }
    }
})

export const { darkMood, menuToggler } = countriesSlice.actions

export default countriesSlice.reducer