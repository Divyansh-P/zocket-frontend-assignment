class queue{
  constructor(){
     this.state={}
     this.front=0
     this.back=0 
     }
     push(val){
      this.state[this.back]=val
      this.back=this.back+1
     }
     pop(){
      if(Object.keys(this.state).length===0){
        console.log('nothing to pop')
      }
      else{
        delete this.state[this.front]
        this.front=this.front+1;
      }
   
     }
}

export default queue
