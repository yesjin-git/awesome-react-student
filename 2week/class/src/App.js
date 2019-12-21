import React, {Component} from "react"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state의 초기값을 설정합니다.
      savedNotes: [
          {id:0, title:"test1", content: "default1"},
        {id:1, title:"test2", content: "default2"}]
    }
  }

  save = ({title,content}) => {
    //설계한 함수의 상태를 확인하기 위해 save를 표시하도록 해봅시다.
    console.log(content + "is saved")

    const {savedNotes}=this.state;
    let lastNoteId='';
    //const savedNotes = this.state.savedNotes
    if(savedNotes.length==0){
      lastNoteId=0
    }else{
      lastNoteId = savedNotes[savedNotes.length-1].id;
    }



    this.setState({
      savedNotes:[
          ...savedNotes,
          {id:lastNoteId+1 ,title:title, content:content}
      ]
    })
  }

  delete=(id)=>{
    const {savedNotes}=this.state
    const deletedNotes=savedNotes.filter((note,index)=>note.id !== id)
    console.log('delete')
    // this.state.savedNote.concat()
    this.setState({
      // savedNotes:[]
      savedNotes:[...deletedNotes]
    })
  }

  render() {
    return (
      <div className='App'>
        <Writing save={this.save} />
        {/* 원래 노트를 여러개 보내므로, Notes라고 하는게 좋겠지만 추후에 Note 컴포넌트로 활용할 예정이기 때문에 Note로 명명해 줍시다.*/}
        {/*<Note content={this.state.savedNotes[0].content} />*/}
        {
          this.state.savedNotes.map((note,index)=>(
            <Note
                title={note.title}
                content={note.content}
                del={this.delete}
                id={note.id}
                key={note.id}
            />
          ))
        }
        {/*리스트여서 map 함수 사용가능*/}
        {/*<Note content={this.state.savedNotes.map((note,index)=>note.content)} />*/}
        {/*위는 array로 넘기는것*/}
      </div>
    )
  }
}

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: "",
      title:"",
      showTitle:false
    }
  }
  titleChange=(e)=>{
    this.setState({
      title:e.target.value
    })
    console.log(e.target.value);
  }
  handleChange = (e) => {
    console.log("changed")
    this.setState({
      [e.target.name]:e.target.value
      // content:e.target.value
    });
    console.log(e);
    //이벤트를 핸들하고 난후 다시 초기화를 시켜서 null
    console.log({...e});
    //렌더링 결과값을 그리는데
    //렌더링시점 전에 날라가서
    //확인하는게 이런식
  }

  handleSubmit = (e) => {
    // this.props.save(this.state.title, this.state.content);
    // 각각의 state값을 넘긴것

    // this.props.save(this.state.title);
    //save함수를 두번날려서 실행이 안되었고, save 함수에 변수가 넘겨지지 않고 있었것

    this.props.save(this.state)
    //전체 state를 넘긴
    e.preventDefault();
  }

  handleContentFocus=(e)=>{
    this.setState({
      showTitle:true
    })
  }


  render() {
    const {showTitle} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        {/*<input type='text'*/}
        {/*       value={this.state.title}*/}
        {/*       onChange={this.titleChange}/><br/>*/}
        {showTitle?(
            <input
                type='text'
                name='title'
                value={this.state.title}
                onChange={this.handleChange}
            />
        ):(<></>)
        }
        <input
            type='text'
            name='content'
            value={this.state.content}
            onFocus={this.handleContentFocus}
            onChange={this.handleChange}
        />
        <input type='submit' />
      </form>
    )
  }
}

class Note extends Component {
  handleDelete=(e)=>{
    this.props.del(this.props.id)
  }
  render() {
    const { title, content } = this.props

    return (
        <div className="Note col s12 m4 l3">
          <div className="DeleteBtn">
            <div className="DeleteBtn btn-floating btn-large">
              <i id="Icon" className="material-icons" onClick={this.handleDelete}>delete</i>
            </div>
          </div>
          <div className="card yellow lighten-4">
            <div className="card-content black-text">
          <span className="card-title">
            {title}
          </span>
              <p>{content}</p>
            </div>
          </div>
        </div>
    )
  }
}

export default App
