import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkState: false,
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
    activeMenu: true,
};

const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        toggleFeature: (state, action) => {
        const feature = action.payload;
        if (state.hasOwnProperty(feature)) {
            state[feature] = !state[feature];
            console.log(feature, state[feature]);
        }
        },
        toggleDarkMode: (state) => {
        state.darkState = !state.darkState;
        },
    },
});

export const { toggleFeature, toggleDarkMode } = navbarSlice.actions;

export default navbarSlice.reducer;
