import React,{Component} from "react"
import PropTypes from 'prop-types'

class Note extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }
  render() {
    const title = this.props.title
    const content = this.props.content
    return (
      //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
      //materialize 의 grid부분을 참고해 주세요.
      <div className='col s12 m6 l3'>
        <div className='card yellow lighten-4'>
          <span className='card-title'>
            {title}
          </span>
          <div className='card-content black-text'>
            {content}
          </div>
        </div>
      </div>
    )
  }
}


export default Note