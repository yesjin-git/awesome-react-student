import React, {Component} from "react"

class Clock  extends Component{
    state ={
        date: new Date()
    };

    handleRefresh = () =>{
        this.setState({ date: new Date() });
    };

    componentDidMount(){
      this.timestart();
    }

    componentDidUpdate(){
        console.log("update");
    }

    timestop = () =>{
        clearInterval(this.intervalId);
    }    

    timestart = () =>{        
        this.intervalId = setInterval( ()=>{
            this.handleRefresh();
        }, 1000); 
    }

    render(){
        return(
            <div>
                {/* <button onClick={this.handleRefresh}>눌러</button>
                <p>{this.props.timenum}</p>
                <p>{this.props.number}</p> */}
                <p>{this.state.date.toLocaleTimeString()}</p>
                <button onClick={this.timestop}>stop</button>
                <button onClick={this.timestart}>start</button>
            </div>
        );
    }
}

export default Clock;