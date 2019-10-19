import React, {Component} from 'react';

class HakguCounter extends Component{
    state={
        number: 0, 
    }  

    countUp = () =>{
        this.setState({number: this.state.number + this.props.scale});
    }

    countDown = () =>{
        this.setState({number: this.state.number - this.props.scale});
    } 
   

    refreshCount = () =>{
        this.setState({number: 0});
    }

    render(){  
       
      
        return( 
        <>  
        

                <div>
                    <p>{this.state.number}</p>
                <button onClick={this.countUp}>+</button>
                <button onClick={this.countDown}>-</button>
                <button onClick={this.refreshCount}>초기화</button>
                </div> 
 
        </>
        ) 

    }
}
 

export default HakguCounter;
 
