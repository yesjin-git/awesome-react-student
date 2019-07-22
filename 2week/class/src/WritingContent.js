import React, {Component} from "react"

export class WritingContent extends Component{
        render(){
            return (
                <div className='input-field'>
                <input
                    type='text'
                    name='content'
                    value={this.props.content}
                    onChange={this.props.handleChange}
                />
                </div>
        )
    }
}