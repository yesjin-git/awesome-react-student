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
      //노트를 클릭했을 때, 노트 밖을 클릭할 때 동작하는 함수를 추가해준다.
      document.addEventListener('mousedown', this.handleClickOutside);

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
      
      //submit이 이루어지면 handleClickOutside 함수가 더 이상 동작하지 않게 해준다. 
      //이 처리를 해주지 않으면 해당 노트가 submit된 이후에도 마우스 클릭시 handleClickOutside 함수가 계속 동작하여
      //마우스 클릭으로 다른 일을 할 수가 없게 된다.
      document.removeEventListener('mousedown', this.handleClickOutside);

      e.preventDefault();
    }

    //Note 클래스 내부에 Note 인스턴스의 노드를 갖는 변수를 설정해준다.
    setNoteRef = (node) => {
      this.noteRef = node;
    }

    //해당 Note 인스턴스의 노드가 클릭한 부분의 노드를 갖고 있지 않을 때(즉, 노트 바깥을 클릭했다는 얘기)
    //sumbit이 이루어지게 한다.
    handleClickOutside = (e) => {
      if (this.noteRef && !this.noteRef.contains(e.target)) {
        // console.log(e.target);
        // console.log(this.noteRef);
        this.handleSubmit(e);
      }
    }

    render() {   

      const {isClicked} = this.state;

      const {title, content} = this.props;

      const modifyFormProps = {
        title: this.state.title,
        content: this.state.content,
        handleClickDelete: this.handleClickDelete,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      }
   

      return (
      <div className="Note col s12 m4 l3" ref={this.setNoteRef}>
        <div className="DeleteBtn">
          <div className="DeleteBtn btn-floating btn-large">
          <i id="Icon" className="material-icons" onClick={this.handleClickDelete}>delete</i>
          </div>
        </div>
        {isClicked ?
        <ModifyForm {...modifyFormProps}/>
        :
        <div className="card yellow lighten-4" onClick={this.handleClickNote}>
          <div className="card-content black-text">
          <span className="card-title">{title}</span>
          <p>{content}</p>
          </div>
        </div>
        }
        
    </div>
      )
      
    }
}
// 심화과제 핵심 : 노트 밖에 클릭이 되어있는가 아닌가를 파악할 수 있어야 된다. 
// -> 노트를 ref로 정의해 주고,클릭된 곳이  ref에 속하는지 아닌지를 확인한다. 

const ModifyForm = (props) => {

  return (
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
  )
}

function inputIsRequired(props, propName, componentName) {
  if (!props[propName]) {
    return new Error(`${propName} is required`)
  }
  return null
}


export default Note;