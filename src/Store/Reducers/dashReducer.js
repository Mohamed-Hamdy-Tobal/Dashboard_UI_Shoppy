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
        },
        cartToggler : (state) => {
            state.cart =!state.cart
        },
        chatToggler : (state) => {
            state.chat =!state.chat
        },
        notiToggler : (state) => {
            state.Notification =!state.Notification
        },
        profileToggler : (state) => {
            state.userProfile =!state.userProfile
        }
    }
})

export const { darkMood, menuToggler, cartToggler, chatToggler, notiToggler, profileToggler } = countriesSlice.actions

export default countriesSlice.reducer