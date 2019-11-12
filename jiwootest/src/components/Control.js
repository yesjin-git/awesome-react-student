import React, { Component } from 'react'

const propTypes = {
    number: propTypes.func,
    onSubtract: propTypes.func,
    onRandomizeColor: propTypes.func
};

function createWarning(funcName){
    return () => console.warn(funcName + 'is not defined');
}

const defaultProps ={
    onPlus : createWarning('onPlus'),
    onSubtract : createWarning('onSubtract'),
    onRandomizeColor : createWarning('onRandomizeColor')
};

export default class Control extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.onRandomizeColor}>RandomizeColor</button>
            </div>
        )
    }
}
