import React, {Component} from 'react';


class Clock extends Component{
 
    state={
        clock : new Date(),
    }    
 

   componentDidMount(){     
     this.startFun();
   }  
    

   componentDidUpdate(){ 
       console.log("update");
   }
 

     
    handleRefresh = () => { 
         
        this.setState({clock: new Date()}); //상태설정, 바꾸겠다


    }  


    stopFun = () => {
        clearInterval(this.intervalId);
    }

    startFun = () => {
        this.intervalId = setInterval(()=>{
            this.handleRefresh();
         },1000);  
    } 
 
   
    render(){ 
         return(    
            <> 
              {/* <button onClick={this.handleRefresh} >초기화</button> */} 
             <p>{this.state.clock.toLocaleTimeString()}</p>
             <button onClick={this.stopFun}>stop</button>
             <br/>
             <button onClick={this.startFun}>start</button>
            </>    
         );
    } 
  
} 



export default Clock; 