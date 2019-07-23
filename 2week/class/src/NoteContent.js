import React, {Component, Fragment} from "react"

export class NoteContent extends Component{
    render(){
        return (
            <Fragment>
                <input
                type='text'
                name='content'
                value={this.props.content}
                onChange={this.props.handleChange}
                // onBlur={this.props.handleBlur}
                />
                <input type='submit' />
            </Fragment>
        )
    }
}
// export const WritingTitle = (n) => {
// class Writing extends Component {