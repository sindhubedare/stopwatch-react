import React from 'react';


class Clock extends React.Component{
    constructor(props)
    {
      super(props);
      this.state=
      {startTime:0}
    }

  //starting a prop with start time = 0  
     startTime()
        {
         this.intervalId=(
            setInterval(()=>{this.setState({
            startTime: this.state.startTime+1,
            })},1000));
        }     
    //using reference: https://medium.com/@staceyzander/setinterval-and-clearinterval-in-react-b1d0ee1e1a6a    
    //intervalID , setInterval and clearInterval are part of react so using them here 
    //incrementing it using +1


     pauseTime()
        {
         
          clearInterval(this.intervalId);   
        }  

            
     resetTime()
        {
          this.setState({startTime:0})
          clearInterval(this.intervalId)
                          
        }  
        
        
    render()
    {
      return (
  
      <div> 
      
        <div className="startpoint"> 0 : {this.state.startTime}</div>
        <div className='buttons'>
          <button id="start" onClick={()=>this.startTime()}>START</button>
          <button id="pause" onClick={()=>this.pauseTime()}>PAUSE</button>
          <button id="reset" onClick={()=>this.resetTime()}>RESET</button>
  
        </div>  
      
      </div>
    );
  }}


export default Clock;



   //Reference: https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks 
  //to pause/cancel: https://dev.to/dance2die/canceling-interval-in-react-52b5