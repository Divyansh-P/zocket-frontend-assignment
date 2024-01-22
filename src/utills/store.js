import { configureStore } from "@reduxjs/toolkit";
import editdataslice from "./editdataslice";

const store=configureStore({
    reducer:{
editdata:editdataslice
    }
})

export default store