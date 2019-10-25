import React, { Component } from "react";


class Clear2 extends Component {

      state={
        number: 0,
        number2: 0
      }   

    

    render() {
      return (
        <div>
          <button onClick={this.props.clearFunc2} >초기화</button>          
        </div>
      );
    }
  }

  

  export default Clear2;