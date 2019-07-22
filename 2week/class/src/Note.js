import React, {Component} from "react"
import './note.css'

class Note extends Component {
  handleDelete = (e) =>{
    // console.log(this.props.id)
    this.props.delete(this.props.id)
  }
  render() {
    const { title, content } = this.props
    return (
    <div className="Note col s12 m4 l3" style={{border:'solid'}}>
      <div className="DeleteBtn">
        <div className="DeleteBtn btn-floating btn-large" onClick={this.handleDelete}
                        style={{border:'solid red'}}>
          <i id="Icon" className="material-icons">delete</i>
          {/* <i class="material-icons">add</i> */}
        </div>
      </div>
      <div className="card yellow lighten-4" >
        <div className="card-content black-text">
          <span className="card-title">
            {title}
          </span>
          <p>{content}</p>
        </div>
      </div>
    </div>

      // <div className='col s12 m6 l3'>
      //   <div className='card yellow lighten-4'>
      //     <span className='card-title'>{title}</span>
      //     <div className='card-content black-text'>{content}</div>
      //   </div>
      // </div>
    )
  }
}
export default Note 