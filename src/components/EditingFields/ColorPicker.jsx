import React,{useState} from 'react'
import { SketchPicker } from 'react-color'
import queue from '../../utills/queue';

const ColorPicker = () => {
    const [color, setColor] = useState('#ffffff');
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
   
   console.log(recentcolor)

const handlecolorChange = (color) => {
   
    setColor(color.hex);
  };
  
  return (
    <div>
    <h1>Choose your color</h1>
    <div className='flex '>
    { Object.values(recentcolor.state).map((color,ind)=>(
        <div key={ind} style={{ backgroundColor: color }} className= {`w-7 h-7 text-lg font-bold rounded-full cursor-pointer text-center `}/>
        
    )) 
    }
  <div className='w-7 h-7 text-lg font-bold  bg-orange-200 rounded-full cursor-pointer text-center' onClick={()=>setshowpicker(true)}>+</div>
    {
       showpicker&& <div className='absolute z-10'> <div onClick={()=>{setshowpicker(false);recentcolorhandler();}} className='fixed top-0 left-0 bottom-0 right-0'/> <SketchPicker color={color} onChange={handlecolorChange}/></div> 
    
    }
    </div>
    
    </div>
  )
}

export default ColorPicker
