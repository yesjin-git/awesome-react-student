import React, { Component } from 'react'

const propTypes = {
    number: propTypes.number
};

const defaultProps ={
    number: -1
};

export default class Value extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        )
    }
}
