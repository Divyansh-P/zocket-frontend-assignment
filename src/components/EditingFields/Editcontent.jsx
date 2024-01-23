import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { settextcontent } from '../../utills/editdataslice'

const Editcontent = () => {
    const [content,setcontent]=useState('')
    const contentHandler=(e)=>{
        setcontent(e.target.value)
    }
   
    const dispatch=useDispatch()

    useEffect(()=>{
      const timer=setTimeout(() => {
        dispatch(settextcontent(content))
      }, 500);
      return()=>{
        clearTimeout(timer)
      }
    },[content])


  return (
    <div className='flex flex-col border-2 border-slate-300 w-4/5 h-14 rounded-lg'>
      <label className=' mx-3 mt-1 mb-1 text-slate-500 text-xs font-bold font-mono'>Ad content</label>
      <input type="text" className='mx-3 focus:outline-none font-mono ' onChange={(e)=>contentHandler(e)}/>
    </div>
  )
}

export default Editcontent
