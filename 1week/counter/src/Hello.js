import React, { Component } from 'react';

class Hello extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: false
    };
  }
  render(){
    return(
      <div>
        안녕하세요.
        {this.state.display ? this.props.text : '안보여줌'}
      </div>
    )
  }
}

export default Hello;