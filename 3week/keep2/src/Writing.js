import React, {Component} from 'react'

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInputTitle: "test",
      userInputContent: "test"
    }
  }

  handleSubmit = (e) => {
		this.props.submit(this.state)
		this.setState = {
      userInputTitle: "",
      userInputContent: ""
		}
    e.preventDefault();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
							type='text'
							name='title'
              value={this.state.userInput}
							onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <input
							type='text'
							name='content'
              value={this.state.userInput}
              onChange={this.handleChange}
            />
          </div>
          <input
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    )
  }
}

export default Writing