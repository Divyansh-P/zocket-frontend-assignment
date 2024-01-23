import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setimage } from '../../utills/editdataslice'

const Editphoto = () => {
  const [adimagename,setadimagename]=useState('')

  const [adimage,setadimage]=useState()

  const inputimagehandler=(e)=>{
    const filename=(e.target.value).split('\\')
    setadimagename(filename[2])
   const imgURL=URL.createObjectURL(e.target.files[0])
   setadimage(imgURL)
  }
 
  const dispatch=useDispatch()

  useEffect(()=>{
  dispatch(setimage(adimage))
  },[adimage])
  
  return (
    <div className='flex items-center h-14 w-4/5 border-2 border-slate-300 rounded-lg'>
      <input type="file" id="image-input" hidden onChange={(e)=>inputimagehandler(e)} />
      <label className='text-sm  font-mono ml-3 text-slate-500' >Change the ad creative image</label>
      <label htmlFor="image-input" className='ml-3 text-sm text-blue-700 font-semibold font-mono cursor-pointer underline underline-offset-1' >Select a File</label>
      <label className='text-xs  font-mono ml-3 text-slate-500 truncate w-[10rem]' >{adimagename}</label>
    </div>
  )
}

export default Editphoto
