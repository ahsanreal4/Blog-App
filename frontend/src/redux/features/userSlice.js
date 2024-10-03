import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    userData : null
}
export const userSlice = createSlice({
    name : "users",
    initialState,
    reducers:{
        addUsers:(state,actions)=>{
            state.userData=actions.payload
        }
    }
})

export const {addUsers}=userSlice.actions
export default userSlice.reducer