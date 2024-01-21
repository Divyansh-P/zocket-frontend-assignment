import React, { Component } from 'react';

class Canvas extends Component {
    constructor(props) {
        super(props);
    
        this.canvasRef = React.createRef();
        this.defaultBgColor = '#3498db';
    
      }
      componentDidMount() {
        this.applyDefaultBgColor();
        this.drawtemplate()
      }
    
      applyDefaultBgColor = () => {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d',{ alpha: false });
        ctx.fillStyle = this.defaultBgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };


 drawtemplate() {
      const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d',{ alpha: false });
        const image=new Image()
       const image2=new Image()
        const image3=new Image()
       image3.onload=()=>{
     ctx.drawImage(image, 0, 0);
     
        ctx.drawImage(image2, 0, 0);
       ctx.drawImage(image3, 0, 0);
      
       }     
      image.src ='https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png';
     image2.src='https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png';
       image3.src='https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png?random=12345 ';
      } 
      
    

  render(){
    return (
      <canvas className='w-96'
        ref={this.canvasRef}
        width={1080}
        height={1080}
        style={{ border: '1px solid #000' }}
      ></canvas>
    );
  }

}

export default Canvas;