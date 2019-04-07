import React, {Component} from 'react'
import './note.css'

class Note extends Component {
    render() {
        const { title, content } = this.props
        
  
      return (
        <div className="Note col s12 m4 l3">
            <div className="DeleteBtn" onclick={this.handleDelete}>
                <div className="DeleteBtn btn-floating btn-large">
                <i id="Icon" className="material-icons">delete</i>
                </div>
            </div>
            <div className="card yellow lighten-4">
                <div className="card-content black-text">
                <span className="card-title">
                    {title}
                </span>
                <p>{content}</p>
                </div>
            </div>
        </div>
      )
    }
  }

export default Note