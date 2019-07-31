import React, { Component } from 'react'

export default class news extends Component {
    render() {
        console.log(this.props);
        return (
            <div style={{background:"blue"}}>
                news
            </div>
        )
    }
}