import React, { useEffect } from 'react'
import Canvas from './Canvas'
import { useSelector } from 'react-redux'

const Display = () => {
   
    const info=useSelector(store=>store.editdata)
   
  return (
    <div className='sm:w-1/2 w-screen sm:h-screen h-[30rem] flex justify-center items-center bg-sky-50'>
      
   <Canvas info={info}/>

    </div>
  )
}

export default Display
