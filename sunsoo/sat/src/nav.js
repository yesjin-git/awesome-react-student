import React, { Component } from 'react'

const Nav = props => {
    return (
        <div className={"Nav"} style={{color:"red"}}>
            <p>nav</p>
        </div>
    );
}
export default Nav;

// export default class nav extends Component {
//     render() {
//         return (
//             <div className={"Nav"} style={{color:"red"}}>
//                 {this.props.children}
                
//             </div>
//         )
//     }
// }

// npm install --save react-router-dom