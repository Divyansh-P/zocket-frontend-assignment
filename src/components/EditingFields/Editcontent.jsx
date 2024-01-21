import React, { useState } from 'react'

const Editcontent = () => {
    const [content,setcontent]=useState('')
    const contentHandler=(e)=>{
        setcontent(e.target.value)
    }
  return (
    <div className='flex flex-col border-2 border-slate-300 w-2/3 h-13'>
      <label className=' mx-3 mt-1 mb-1 text-slate-500 text-xs font-bold font-mono'>Ad content</label>
      <input type="text" className='mx-3 focus:outline-none font-mono ' onChange={(e)=>contentHandler(e)}/>
    </div>
  )
}

export default Editcontent
