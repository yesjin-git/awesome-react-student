import React, {Component} from "react"
import "./note.css"
// import PropTypes from "prop-types"

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      content: "",
      // view의 상태를 관리하는 state는 주로 isXXX형태로 명명해 명확하게 표현해줍니다.
      isEditFocused: false
    }
  }

  handleClickDelete = () => {
    this.props.delete(this.props.index)
  }

  handleFocus = (e) => {
    this.setState({
      isEditFocused: true
    })
    console.log(this.props.index + "is focused")
}

  handleFocusOut = (e) => {
      this.setState({
        isEditFocused: false
      })
      console.log(this.props.index + "is not focused")
  }

  render() {
    const {title, content} = this.props
    const editFocus = this.state.isEditFocused
    if (!editFocus) {
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
          <div onClick={this.handleFocus} className='card yellow lighten-4'>
            <div className='card-content black-text'>
              <span className='card-title'>{title}</span>
              <p>{content}</p>
            </div>
          </div>
        </div>
      )
    } 
    else {
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
          <div onClick={this.handleFocus} className='card yellow lighten-4'>
            <div className='card-content black-text'>
              <div className='input-field'>
                <input
                type='text'
                name='title'
                value={title}
                />
              </div>
              <div className='input-field'>
                <input
                  type='text'
                  name='content'
                  value={content}
                />
              </div>
              <input type='submit' value='Submit' />
            </div>
          </div>
        </div>
      )}
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
