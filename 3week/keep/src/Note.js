import React, { Component } from 'react';
import './App.css';

class Note extends Component {
  //Props의 기본값을 설정해 줍니다.
  constructor(props) {
    super(props);
    this.state = {
      isEnter: false,
      scale: 'scale-out'
    }
  }

  toggleDeleteBtn = (e) => {
    if (this.state.isEnter) {
      this.setState({
        isEnter: false,
        scale: 'scale-out'
      })
    } else {
      this.setState({
        isEnter: true,
        scale: 'scale-in'
      })
    }
  }

  render() {
    return (
      <div className="Note col s12 m4 l3" onMouseEnter={this.toggleDeleteBtn} onMouseLeave={this.toggleDeleteBtn}>
        <div className="DeleteBtn">
        {/* 함수 보내기 설명!https://reactjs.org/docs/faq-functions.html */}
          <div onClick={() => this.props.onDelete(this.props.note.id)} className={"DeleteBtn btn-floating btn-large scale-transition " + this.state.scale} >
            <i id="Icon" className="material-icons">delete</i>
          </div>
        </div>
        {/* 마우스가 들어올 때 보여주는 이밴트 생성 */}
        <div className="card yellow lighten-4">
          <div className="card-content black-text">
            <span className="card-title">
              {this.props.note.title}
              {/*토글이 켜져 있으면 보여주고, 아니면 나타나지 않도록 한다. */}
            </span>
            <p>{this.props.note.content}</p>
          </div>
        </div>
      </div >
    );
  }


}

export default Note;