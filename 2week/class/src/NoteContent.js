import React, {Component} from "react"

export class NoteContent extends Component{
    render(){
        return (
            <div className='input-field'>
                <input
                type='text'
                name='content'
                value={this.props.content}
                onChange={this.props.handleChange}
                />
                <input type='submit' />
            </div>
        )
    }
}
// export const WritingTitle = (n) => {
// class Writing extends Component {