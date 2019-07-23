import React, {Component} from "react"

export class WritingTitle extends Component{
    render(){
        return (
            <input
                type='text'
                name='title'
                value={this.props.title}
                onChange={this.props.handleChange}
                placeholder="Input Title"
            />
        )
    }
}