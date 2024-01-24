import React from 'react'
import Editphoto from './Editphoto'
import Editcontent from './Editcontent'
import EditCTA from './EditCTA'
import ColorPicker from './ColorPicker'

const EditArea = () => {
  return (
    <div className='flex flex-col sm:w-1/2 w-screen'>
    <h1 className='text-center font-mono text-lg sm:text-2xl font-bold mt-32'>Ad customisation</h1>
    <div className='sm:ml-20 ml-10 mt-14'><Editphoto/></div>  
    <div className='sm:ml-20 ml-10 mt-10'>  <Editcontent/></div>  
    <div className='sm:ml-20 ml-10 mt-10'><EditCTA/></div>  
    <div className='sm:ml-20 ml-10 mt-10'> <ColorPicker/></div>  
    
    
      
     
    </div>
  )
}

export default EditArea 
