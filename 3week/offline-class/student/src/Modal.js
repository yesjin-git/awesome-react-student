import React, {Component} from "react";

export default class Modal extends Component{
    render(){
        return(
            <div style={{height:"100px", backgroundColor:"red"}}>
                {this.props.children}
            </div>
        )
    }
}