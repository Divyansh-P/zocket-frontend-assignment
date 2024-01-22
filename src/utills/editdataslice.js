import { createSlice } from "@reduxjs/toolkit";

const editdataslice=createSlice({
    name:'editdata',
    initialState:{
        bgcolor:'#0369A1',
        adimage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjZbZhXnG7csqW27P8uFkwtMOH0vEr9GzGg&usqp=CAU',
        textcontent:'1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs',
        cta:'ShopNow'
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
        setcta:(state,action)=>{
         state.cta=action.payload
        },

    }

})

export const {setbgcolor,setimage,settextcontent,setcta} = editdataslice.actions

export default editdataslice.reducer