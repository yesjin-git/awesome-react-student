import React, { Component } from 'react';
import './note.css';

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {      
      editTitle: "",
      editContent: "",
      isEditing: false
    }
  }

  handleNoteClick = (e) => {
    if(!this.state.isEditing){
      const { content, title } = this.props;
      this.setState({
        isEditing: true,
        editTitle : title,
        editContent: content
      });
    }    
  }
  

  handleDelete = (e) => {
    this.props.delete(this.props.id);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleEdit = (e) => {
    this.props.edit(this.props.id, this.state);
    this.setState({
      isEditing: false
    });
    e.preventDefault();
  }


  render() {
    const { content, title } = this.props;
    const { editTitle, editContent, isEditing } = this.state;
    const { handleChange, handleDelete, handleNoteClick, handleEdit } = this;

    const editingTitle = (
      <div className="input-field">
        <input
          type='text'
          name='editTitle'
          value={editTitle}
          onChange={handleChange}
        />        
      </div>);

    const editingContent = (
      <div className="input-field">
        <input
          type='text'
          name='editContent'
          value={editContent}
          onChange={handleChange}
        />        
      </div>);


    return (
      //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
      //materialize 의 grid부분을 참고해 주세요.
      <div className="Note col s12 m4 l3">
        <div className="DeleteBtn">
          <div className="DeleteBtn btn-floating btn-large">
            <i id="Icon" onClick={handleDelete} className="material-icons">delete</i>
          </div>
        </div>
        <div className="card yellow lighten-4">
          <div className="card-content black-text" onClick={handleNoteClick} >
            {
              isEditing ? (
                <>
                  {editingTitle}
                  {editingContent}
                  <input
                    type='submit'
                    value='Submit'
                    onClick={handleEdit}
                  />
                </>
              ) : (                
                <>
                  <span className="card-title"> {title} </span>
                  <p>{content}</p>
                </>                
              )
            }
            
          </div>
        </div>
      </div>
    )
  }
}


export default Note;