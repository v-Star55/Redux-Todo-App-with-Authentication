import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("user");
const initialState = {
    isAuthenticated: !!storedUser,
    user: storedUser ? JSON.parse(storedUser) : { id: "", username: "", email: "" }
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            const user = {
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email
            }
            state.isAuthenticated = true
            state.user = user
            localStorage.setItem("user", JSON.stringify(user));
        },
        logout(state) {
            state.isAuthenticated = false
            state.user = { id: "", username: "", email: "" }
            localStorage.removeItem("user");
        }
    }
})

export const {login,logout}=authSlice.actions
export default authSlice.reducer