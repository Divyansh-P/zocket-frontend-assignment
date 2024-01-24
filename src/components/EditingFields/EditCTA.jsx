import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCTA } from '../../utills/editdataslice'

const EditCTA = () => {
    const [cta,setcta]=useState()
    const CTAHandler=(e)=>{
    setcta(e.target.value)
    }
   
    const dispatch=useDispatch()

    useEffect(()=>{
      const timer=setTimeout(() => {
        dispatch(setCTA(cta))
      }, 500);
      return()=>{
        clearTimeout(timer)
      }
    },[cta])

  return (
    <div className='flex flex-col border-2 border-slate-300 w-5/6 sm:w-4/5 h-14 rounded-lg' >
      <label className=' mx-3 mt-1 mb-1 text-slate-500 text-xs font-bold font-mono'>CTA</label>
      <input type="text" className='mx-3 mb-1 focus:outline-none font-mono ' onChange={(e)=>CTAHandler(e)}/>
    </div>
  )
}

export default EditCTA
