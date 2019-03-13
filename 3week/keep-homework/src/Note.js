import React, {Component} from "react";
import "./note.css";
// import PropTypes from "prop-types"

export default class Note extends Component {
  static propTypes = {
    title: inputIsRequired,
    content: inputIsRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      content: this.props.content,
      isWritingFocused: false
    }
  }

  handleSubmit = (e) => {
    const {title, content} = this.state;

    e.preventDefault();

    if (!title || !content) {
      return;
    }

    this.props.edit(this.props.index, title, content);

    this.handleBlur();
  }

  handleDelete = () => {
    this.props.delete(this.props.index);
  }

  handleClick = () => {
    // const {isWritingFocused} = this.state;

    this.setState({
      isWritingFocused: true
    });
  }

  handleChange = (event) => {
    //key 내부에 []를 쓰면, 내부 자바스크립트를 따라 실행됩니다.
    //곧 이 경우 event.target.name에 접근하게 됩니다.
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleBlur = () => {
    this.setState({
      isWritingFocused: false
    });
  }

  render() {
    const {title, content} = this.state;
    const {isWritingFocused} = this.state;
    const {handleSubmit, handleDelete, handleClick, handleChange, handleBlur} = this;

    const editNoteProps = {
      title: title,
      content: content,
      handleChange: handleChange,
      handleBlur: handleBlur,
      handleSubmit: handleSubmit
    }

    const viewNoteProps = {
      title: title,
      content: content,
      handleClick: handleClick
    }

    return (
      //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
      //materialize 의 grid부분을 참고해 주세요.
      <div className='Note col s12 m4 l3'>
        <div className='DeleteBtn'>
          <div className='DeleteBtn btn-floating btn-large'>
            <i onClick={handleDelete} id='Icon' className='material-icons'>
              delete
            </i>
          </div>
        </div>
        <div className='card yellow lighten-4' onClick={handleClick}>
          <div className='card-content black-text'>
            { isWritingFocused ? (<EditNote {...editNoteProps} />) : (<ViewNote {...viewNoteProps} />) }
          </div>
        </div>
      </div>
    )
  }
}

function inputIsRequired(props, propName, componentName) {
  if (!props[propName]) {
    return new Error(`${propName} is required`);
  }

  return null;
}

function ViewNote(props) {
  return (
    <div>
      <span className='card-title'>{props.title}</span>
      <p>{props.content}</p>
    </div>
  )
}

function EditNote(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type='text'
          name='title'
          value={props.title}
          onChange={props.handleChange}
        />
        <input
          type='text'
          name='content'
          value={props.content}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        <input
          type='submit'
          value='submit'
        />
      </form>
    </div>
  )
}