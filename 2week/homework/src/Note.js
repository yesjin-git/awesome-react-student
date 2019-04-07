import React, {Component} from "react"
import "./note.css"

class Note extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content,
      id: this.props.note_id,
      isEditing: false
    }
  }

  handleClick = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  handleClickDelete = () => {
    this.props.delete(this.props.index)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }
  handleSubmit = (e) => {
    this.props.edit(this.state);
    this.setState({
      isEditing: !this.state.isEditing
    });
    e.preventDefault()
  }

  handleBlur = () => {
    this.props.edit(this.state);
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  render() {
    const {title, content} = this.state;
    const {handleSubmit} = this
    return (
      <div className={`Note col s12 m4 l3 ${this.state.isEditing ? 'editing' : ''}`} onBlur={this.handleBlur}>
        <div className='DeleteBtn'>
          <div className='DeleteBtn btn-floating btn-large'>
            <i onClick={this.handleClickDelete} id='Icon' className='material-icons'>
              delete
            </i>
          </div>
        </div>
        <div className='card yellow lighten-4'>
          <div className='card-content black-text view' onClick={this.handleClick}>
            <span className='card-title'>{title}</span>
            <p>{content}</p>
          </div>
          <form onSubmit={handleSubmit} className="edit">
          <div className='card-content black-text'>
            <input type="text" className='card-title' name="title" value={title} onChange={this.handleChange} />
            <input type="text" name="content" value={content} onChange={this.handleChange} />
          </div>
          <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    )
  }
}

function inputIsRequired(props, propName, componentName) {
  if (!props[propName]) {
    return new Error(`${propName} is required`)
  }
  return null
}

Note.propTypes = {
  title: inputIsRequired,
  content: inputIsRequired
}

export default Note
