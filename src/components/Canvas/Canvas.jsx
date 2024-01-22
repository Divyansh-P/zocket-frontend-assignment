import React, { Component } from 'react';
import { breakStringIntoArray,drawRoundedRect } from '../../utills/constants';
class Canvas extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.defaultBgColor = '#0369A1';
      }
    
     componentDidMount(){ 
      this.drawtemplate()
     
     }

      componentDidUpdate(){
        this.drawadimage(this.props.info.adimage)
        this.writetextcontent(this.props.info.textcontent)
        this.writecta(this.props.info.cta)
      }


 
 drawtemplate() {
      const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        const image=new Image()
      const image2=new Image()
        const image3=new Image()
       image.onload=()=>{
       ctx.drawImage(image, 0, 0);
       }
      
        image2.onload=()=>{
        ctx.drawImage(image2, 0, 0);
       }   
       
       image3.onload=()=>{
        ctx.drawImage(image3, 0, 0);
       }   
         
      image.src ='https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png';
     image2.src='https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png';
       image3.src='https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png?random=12345 ';
      } 

      drawadimage=(img)=>{
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        const image=new Image()
       image.onload=()=>{
       ctx.drawImage(image, 56, 442,970,600);
       }
       image.src =img
      }
      
   writetextcontent=(text)=>{
    const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF'; 
      ctx.font = '44px Arial'; 
      let start=50
      if(!text){
        text='hello'
      }
      const lines=breakStringIntoArray(text,31)
      lines.map(line=>{
        ctx.fillText(line,50,start);
        start=start+50
      })
   }

   writecta=(text)=>{
    const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
    
        const bgColor ="#000000"
        if(!text){
        text='hello'
      }
        const lines=breakStringIntoArray(text,20)
      const text_width=ctx.measureText(lines[0]).width
      const text_height=lines.length*30
      const width=text_width+48
      const height=text_height+48
      drawRoundedRect(190, 320,width,height, 20, bgColor,ctx);
        let start=320+height/2
        ctx.font = '30px Arial'; 
        ctx.fillStyle ='#ffffff' ;
        lines.map(line=>{
        ctx.fillText(line,214,start);
        start=start+30
      })
   }
    

  render(){

    return (
      <canvas className='w-[26rem]'
        ref={this.canvasRef}
        width={1080}
        height={1080}
        style={{ backgroundColor:`${this.props.info.bgcolor}`,border:"2px solid black" }}
      ></canvas>
    );
  }

}

export default Canvas;