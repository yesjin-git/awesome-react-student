import React, {Component} from "react"
class Writing extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title: this.props.title,
        content: this.props.content,  
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
   

    handleClickNormal = (e) => { 
        this.props.handleClickNormal(this.props.index);
        e.preventDefault();  
    } 
  
    handleSubmit = (e) => { 
      this.props.editSave(this.state,this.props.index);  
      

      
      e.preventDefault();  
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
          <input className='hsubmit' type='submit' value='저장버튼' />
        </form>
      </div>   
      )  
    } 
  } 
 
  
  export default Writing;