import React,{useEffect, useState} from 'react'
import { SketchPicker } from 'react-color'
import queue from '../../utills/queue';
import { useDispatch } from 'react-redux';
import { setbgcolor } from '../../utills/editdataslice';

const ColorPicker = () => {
    const [color, setColor] = useState('#0369A1');
    const [showpicker,setshowpicker]=useState(false) 
    const [recentcolor,setrecentcolor]=useState(new queue())
  
   const recentcolorhandler=()=>{
    let newrecentcolor=new queue()
    newrecentcolor=Object.assign(recentcolor)
    if(Object.keys(recentcolor.state).length>=5){
        newrecentcolor.pop()
        newrecentcolor.push(color)
        console.log('working')
    }
    else{
        newrecentcolor.push(color)
    }
   
    setrecentcolor(newrecentcolor)
   }

   const dispatch=useDispatch()
   
  useEffect(()=>{
  dispatch(setbgcolor(color))
  },[color])

const handlecolorChange = (color) => {
   
    setColor(color.hex);
  };

  const openEyeDropper = async () => {
    if ('EyeDropper' in window) {
        let eyeDropper = new EyeDropper();
const { sRGBHex } = await eyeDropper.open();
setColor(sRGBHex)
}
else{
    alert('use chrome or edge')
}
}
  
  return (
    <div>
    <h1 className='text-slate-500 font-mono text-sm font-bold'>Choose your color</h1>
    <div className='flex mt-2 '>
    { Object.values(recentcolor.state).map((color,ind)=>(
        <div key={ind} onClick={()=>setColor(color)} style={{ backgroundColor: color }} className= {` w-7 mr-2 h-7 text-lg font-bold rounded-full cursor-pointer text-center `}/>
        
    )) 
    }
  <div className='w-7 h-7 text-lg font-bold bg-slate-100  rounded-full cursor-pointer text-center' onClick={()=>setshowpicker(true)}>+</div>
    {
       showpicker&& <div className='absolute z-10'> <div onClick={()=>{setshowpicker(false);recentcolorhandler();}} className='fixed top-0 left-0 bottom-0 right-0 z-0'/> <SketchPicker color={color} onChange={handlecolorChange}/> <div className='w-full border-2 bg-white border-slate-300 h-10 font-mono text-xs font-bold text-center pt-2 cursor-pointer z-20 absolute' onClick={openEyeDropper}>Pick color from this page</div></div> 
    
    }
    </div>
    
    </div>
  )
}

export default ColorPicker
