import React, {Component} from "react"

export class WritingTitle extends Component{
    render(){
        return (
            <div className='input-field'>
            <input
                type='text'
                name='title'
                value={this.props.title}
                onChange={this.props.handleChange}
                // onFocus={this.props.handleFocus}
                // onBlur={this.props.handleBlur}
            />
            </div>
        )
    }
}
// export const WritingTitle = (n) => {
// class Writing extends Component {