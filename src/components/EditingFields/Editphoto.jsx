import React, { useState } from 'react'

const Editphoto = () => {
  const [adimagename,setadimagename]=useState('')

  const [adimage,setadimage]=useState()

  const inputimagehandler=(e)=>{
    const filename=(e.target.value).split('\\')
    console.log(filename)
    setadimagename(filename[2])
   const imgURL=URL.createObjectURL(e.target.files[0])
   setadimage(imgURL)
  }
  
  return (
    <div className='flex items-center h-10 w-2/3 border-2 border-slate-300 '>
      <input type="file" id="image-input" hidden onChange={(e)=>inputimagehandler(e)} />
      <label className='text-sm  font-mono ml-7 text-slate-500' >Change the ad creative image</label>
      <label htmlFor="image-input" className='ml-5 text-sm text-blue-700 font-semibold font-mono underline underline-offset-1' >Select a File</label>
      <label className='text-sm  font-mono ml-5 text-slate-500' >{adimagename}</label>
    </div>
  )
}

export default Editphoto
