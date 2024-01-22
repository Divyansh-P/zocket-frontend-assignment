import React, { useEffect } from 'react'
import Canvas from './Canvas'
import { useSelector } from 'react-redux'

const Display = () => {
   
    const info=useSelector(store=>store.editdata)
   
  return (
    <div className='w-1/2 h-screen flex justify-center items-center bg-sky-50'>
      
   <Canvas info={info}/>

    </div>
  )
}

export default Display
