import React, {Component} from "react"
import "./note.css"
// import PropTypes from "prop-types"

class Note extends Component {
  constructor(props) {
    super(props);

    // const {title, content} = this.props
    this.state = {
      isEditMode: false,
      id: this.props.id,
      title: this.props.title,
      content: this.props.content,
      domObject: null,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.edit(this.state);

    this.setState({
      isEditMode: false
    });
  }

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    });
  }

  handleClickDelete = () => {
    this.props.delete(this.props.index);
  }

  handleClickEdit = (e) => {
    this.setState({
        isEditMode: true,
        domObject: e.currentTarget
    });

    document.addEventListener('click', this.outsideClick);
  }

  outsideClick = (e) => {
    for (var dom of e.path) {
      if(dom == this.state.domObject) return false;
    }

    this.handleSubmit(e);
    document.removeEventListener('click', this.outsideClick);
  }

  render() {
    const {isEditMode, id, title, content} = this.state

    return (
      //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
      //materialize 의 grid부분을 참고해 주세요.
      <div className='Note col s12 m4 l3'>
        <div className='DeleteBtn'>
          <div className='DeleteBtn btn-floating btn-large'>
            <i onClick={this.handleClickDelete} id='Icon' className='material-icons'>
              delete
            </i>
          </div>
        </div>
        <div className='card yellow lighten-4' onClick={this.handleClickEdit}>
          <div className='card-content black-text'>
            {
              isEditMode ?
              <form onSubmit={this.handleSubmit}>
                <input type="hidden" name="id" value={id} />
                <input type="text" name="title" value={title} onChange={this.handleChange} />
                <input type="text" name="content" value={content} onChange={this.handleChange} />
                <button type="submit">submit</button>
              </form>
              :
              <div>
                <span className='card-title'>{title}</span>
                <p>{content}</p>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
//propTypes를 응용해, props가 존재하지 않을 경우 Error로그를 띄우는 예제 입니다.
//교육자료의 propTypes 부분을 참고해 주세요.
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
