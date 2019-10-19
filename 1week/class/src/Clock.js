import React, {Component} from 'react'; 


class Clock extends Component {

    state = {
        date : new Date()

    }



    // 화면이 그려질 때 최초 한번만 실행
    componentDidMount() { 
        
        this.startClock(); 
         
    } 
 
    // 데이터가 변경될 떄마다 실행 
    componentDidUpdate(){
        console.log("update"); 
    } 
  
    handleRefresh = () =>{ 
        this.setState({ date: new Date() });  
    };  
 
    stopClock = () =>{     
        clearInterval(this.intervalId);  
    };  
 
    startClock = () =>{
        this.intervalId =  setInterval(()=>{
            this.handleRefresh(); 
    },1000); 
    }; 
  
    render(){  
        return(   
            <>
                <div>    
                    <p>{this.props.hakgu}</p> 
                    <p>{this.props.number}</p>    
                    <p>{this.state.date.toLocaleTimeString()}</p> 
                    <br/>
                    <button onClick={this.stopClock}>정지!</button>
                    <button onClick={this.startClock}>재실행!</button>
                    
                </div>     
            </>   
        )
    } 
}
  
 
export default Clock; 