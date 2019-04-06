import React, {Component} from 'react'

class Writing extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title:"",
        content: ""
      }
    }
  
    handleChange = ({target}) => {
      this.setState({[target.name]:target.value})
    }
  
    handleSubmit = (e) => {
      //const {content} = this.state
      this.props.save(this.state)
      e.preventDefault()
    }

    handleFocus = () => {
        this.setState({
            isFocused : true
        })
    }


  
    render() {
        const {isFocused} =this.state
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
          />
          {isFocused ? 
            <input
            type='text'
            name='content'
            value={this.state.content}
            onChange={this.handleChange}
          />
          : 
            'false'
          }
          
          <input type='submit' />
        </form>
      )
    }
  }

  export default Writing