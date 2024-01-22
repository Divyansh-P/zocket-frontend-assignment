import { createSlice } from "@reduxjs/toolkit";

const editdataslice=createSlice({
    name:'editdata',
    initialState:{
        bgcolor:'',
        adimage:'',
        textcontent:'',
        cta:''
    },
    reducers:{
        setbgcolor:(state,action)=>{
         state.bgcolor=action.payload
        },
        setimage:(state,action)=>{
         state.adimage=action.payload
        },
        settextcontent:(state,action)=>{
         state.textcontent=action.payload
        },
        setCTA:(state,action)=>{
         state.cta=action.payload
        },
    }

})

export const {setbgcolor,setimage,settextcontent,setCTA} = editdataslice.actions

export default editdataslice.reducer