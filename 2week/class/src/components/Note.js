import React, {Component} from 'react';
import './note.css'

class Note extends Component {
    static propTypes = {
      title: inputIsRequired,
      content: inputIsRequired,
    }       

    constructor(props) {
      super(props);
      this.state = {
        content: "",
        title: "",
        isClicked: false
      }
    }

  //JSX 상에 넣을수도 있지만 코드기 길어질 경우 유지보수를 생각하면 
  //논리구조를 다루느느 부분은 render밖으로 빼서 관리하는 것이 좋다.
    handleClickDelete = () => {
      this.props.delete(this.props.id);
    }

    handleClickNote = () => {
      if(!this.state.isClicked) this.setState({isClicked: true, content: this.props.content, title: this.props.title})
    }
    

    handleChange = ({target}) => {
      this.setState({[target.name]: target.value});
    }

    handleSubmit = (e) => {
      const writing = this.state;
      const {id} = this.props;
      this.props.modify(id, writing);
      
      this.setState({isClicked: false});
      
      e.preventDefault();
    }

  
  
    // showTitleandContent = () => {

    // }

    render() {   

      const {isClicked} = this.state;
      const clickedNoteProps = {
        title: this.state.title,
        content: this.state.content,
        handleClickDelete: this.handleClickDelete,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      }
      const unclickedNoteProps = {
        title: this.props.title,
        content: this.props.content,
        handleClickNote: this.handleClickNote,
        handleClickDelete: this.handleClickDelete
      }

      if(isClicked) return <ClickedNote {...clickedNoteProps} />
      else return <UnclickedNote {...unclickedNoteProps} />
    }
}

const UnclickedNote = (props) => {
 
  return (
    <div className="Note col s12 m4 l3">
        <div className="DeleteBtn">
          <div className="DeleteBtn btn-floating btn-large">
          <i id="Icon" className="material-icons" onClick={props.handleClickDelete}>delete</i>
          </div>
        </div>
        <div className="card yellow lighten-4" onClick={props.handleClickNote}>
            <div className="card-content black-text">
            <span className="card-title">
                {props.title}
            </span>
            <p>{props.content}</p>
            </div>
        </div>
    </div>
  )
}


const ClickedNote = (props) => {

  return (
    <div className="Note col s12 m4 l3">
        <div className="DeleteBtn">
          <div className="DeleteBtn btn-floating btn-large">
          <i id="Icon" className="material-icons" onClick={props.handleClickDelete}>delete</i>
          </div>
        </div>
        <form onSubmit={props.handleSubmit}>
          <div className="card yellow lighten-4">
              <div className="card-content black-text">
              <input
                type='text'
                name='title'
                autoComplete="off"
                value={props.title}
                onChange={props.handleChange}
              />  
              <input
                type='text'
                name='content'
                autoComplete="off"
                value={props.content}
                onChange={props.handleChange}
              /> 
              </div>
              <input type='submit'/>
          </div>
         
        </form>
        
    </div>
  )
}

function inputIsRequired(props, propName, componentName) {
  if (!props[propName]) {
    return new Error(`${propName} is required`)
  }
  return null
}


export default Note;