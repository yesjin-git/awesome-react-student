import React, { Component } from 'react';

class Nav extends Component{
    render(){
        return(
            <>
                <span>{this.props.children}</span>
            </>
        )
    }
}

export default Nav;