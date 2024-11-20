import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        input:null,
    },
    reducers:{
        setInput:(state,action)=>{
            state.input = action.payload;
        }
    }
});
export const {setInput} = userSlice.actions;
export default userSlice.reducer;