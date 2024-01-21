import React, { useState } from 'react'

const EditCTA = () => {
    const [cta,setcta]=useState()
    const CTAHandler=(e)=>{
    setcta(e.target.value)
    }
  return (
    <div className='flex flex-col border-2 border-slate-300 w-2/3 h-13'>
      <label className=' mx-3 mt-1 mb-1 text-slate-500 text-xs font-bold font-mono'>CTA</label>
      <input type="text" className='mx-3 mb-1 focus:outline-none font-mono ' onChange={(e)=>CTAHandler(e)}/>
    </div>
  )
}

export default EditCTA
