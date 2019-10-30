import React, {Component} from 'react';

class Writing extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title:"",
        content: ""
      }
    }
    
  
    handleChange = (e) => {
        //console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        });
    };
  
    handleSubmit = (e) => {
      this.props.save(this.state);
      this.setState({
          title:"",
          content: ""
      });
      e.preventDefault();
    };
  
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