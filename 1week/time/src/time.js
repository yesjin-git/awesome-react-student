import React, {Component} from 'react';

class DateApp extends Component{
   render(){
       const timeStyle = {
           fontSize : '30px'
       }
       return (
           <div>
               <p style={timeStyle}>{this.props.timeText}</p>
               <button onClick={this.props.timeStop}>stop</button><br></br>
               <button onClick={this.props.timePlay}>start</button>
           </div>
       );
   }
}
export default DateApp;