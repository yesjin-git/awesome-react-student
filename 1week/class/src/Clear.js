import React, { Component } from "react";


class Clear extends Component {

      state={
        number: 0,
        number2: 0
      }   

    

    render() {
      return (
        <div>
          <button onClick={this.props.clearFunc} >초기화</button>          
        </div>
      );
    }
  }

  

  export default Clear;