import { createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoading: true,
        token: "",
    },
    reducers: {
        getToken: (state, action) => {
            state.token = action.payload
        },
        getUserSuccess: (state, action) => {
            state.user = action.payload
            state.isLoading = false;
        },
        getUserFailed: (state, action) => {
            state.user = {}
            state.isLoading = false;
        },
       
    },
     
})

export const {getUserSuccess, getUserFailed, getToken} = userSlice.actions

export const  userSelector = (state) => state.user.user
export const  isLoadingSelector = (state) => state.user.isLoading
export const   tokenSelector = (state) => state.user.token
export default userSlice.reducer