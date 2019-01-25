import React,{Component} from "react"
import './note.css'
//<Note del={this.delete} id={note.id} title={note.title} content={note.content} key={idx}/>
class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditClick_post: false,  
            title: props.title,
            content:props.content,
            index_id:props.id
        }
    }
    handleDelete =(e) => {
        //const btn_del = this.props.del
        //e.target.
        this.props.del(this.props.id)
        //console.log(`this.props.id : ${this.props.id}`);
    }
    handleEdit =(e)=>{
        //const edit = this.props.edit
        this.setState({
            isEditClick_post:true,
            title:this.props.title,
            content:this.props.content,
            index_id:this.props.id
        })
        console.log(this.isEditClick_post);
        e.preventDefault();
    }
    handleSubmit = (e)=>{
        this.props.edit(this.state.index_id, this.state.title, this.state.content)
        this.setState({
            isEditClick_post: false,
            title:"",
            content:""
         })
        e.preventDefault();
    }
    handleChange = (e) => {
        //console.log('userInput is ' + this.state.userInput)
        this.setState({
          [e.target.name]: e.target.value
        })
      }
      
    render() {
        const {title, content} = this.props
        const post = (
            <div className="card yellow lighten-4">
            <div className="card-content black-text" onClick={this.handleEdit}>
              <span className="card-title">
                {title}
              </span>
              <p>{content}</p>
            </div>
        </div>
        )
        const new_post = (
            <form onSubmit={this.handleSubmit}>
            <div className="card yellow lighten-4">
            <div className="card-content black-text">
              <span className="card-title">
                
                <input type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
              </span>
              <p><input type='text' name='content' value={this.state.content} onChange={this.handleChange}/></p>
              <input type='hidden' name='index_id' value={this.state.index_id}/>
              <input
              type='submit'
              value='Submit'/>
            </div>
        </div>
        </form>
        )
        return (
         //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
          //materialize 의 grid부분을 참고해 주세요.
          <div className="Note col s12 m4 l3">
            <div className="DeleteBtn">
              <div className="DeleteBtn btn-floating btn-large">
                <i id="Icon" className="material-icons" onClick={this.handleDelete}>delete</i>
              </div>
            </div>
            {this.state.isEditClick_post===true? new_post:post}
            
          </div>
        )
      }
    }

  export default Note