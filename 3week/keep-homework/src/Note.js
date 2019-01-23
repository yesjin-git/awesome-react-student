import React, {Component} from "react"

class Note extends Component {
  render() {
    const {content, title, del, id} = this.props
    return (
      //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
      //materialize 의 grid부분을 참고해 주세요.
      <div className='Note col s12 m4 l3'>
        <div className='DeleteBtn'>
          <div className='DeleteBtn btn-floating btn-large'>
            <i onClick={()=>del(id)} id='Icon' className='material-icons'>
              delete
            </i>
          </div>
        </div>
        <div className='card yellow lighten-4'>
          <div className='card-content black-text'>
            <span className='card-title'>{title}</span>
            <p>{content}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Note
