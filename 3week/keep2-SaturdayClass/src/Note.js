import React,{Component} from "react"
import './note.css'

class Note extends Component {

  handleOnClickDelete = (e) => {
    this.props.delete(this.props.id)
  }
  render() {
    const content = this.props.content
    const title = this.props.title
    return (
      <div className="Note col s12 m4 l3">
        <div className="DeleteBtn">
          <div className="DeleteBtn btn-floating btn-large">
            <i onClick={this.handleOnClickDelete} id="Icon" className="material-icons">delete</i>
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

const isNotEmptyString = (props,propName,componentName) => {
  if(props[propName] === '') {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
}

Note.propTypes = {
  title: isNotEmptyString,
  content: isNotEmptyString,
}


export default Note