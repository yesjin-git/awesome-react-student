import React, {Component} from "react"
class Writing extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title: "제목입력",
        content: "이 곳에 입력해주세요",  
      }  
    }
   
    handleChange = (e) => { 
      // console.log(e); 
      // console.log(e.taget); 
      this.setState({   
      [e.target.name]:e.target.value
      })     
   
      console.log("changed")  
    }
   
    handleSubmit = (e) => { 
      this.props.save(this.state);  
       
      this.setState({
        title: "",
        content: "" 
      });
       
      e.preventDefault(); 
    } 
   
    
    resetContent = () => { 
      setTimeout(() => {
        this.setState({
          content:"" 
        });
      }, 3000);  
    } 
  
    componentDidMount(){
      this.resetContent();
    } 
  
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <div className='input-field'>
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div> 
 
          <div className='input-field'>
            <input
              type='text' 
              name='content'   
              value={this.state.content}
              onChange={this.handleChange}
            />
          </div>

          <input type='submit' value='Submit' />
        </form>
      </div>
      ) 
    }
  }

  
  export default Writing;