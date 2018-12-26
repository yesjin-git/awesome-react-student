import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      savedNotes : [
        'default1',
        'default2'
      ]
    }
  }

  handleSave = (userInput) => {
    const savedNotes = this.state.savedNotes
    this.setState({
      savedNotes : [
        ...savedNotes, userInput
      ]

    })
    console.log('save')
  }


  render() {
    return (
      <div className="App">
        <Writing 
          save={this.handleSave}
        />
        <Notes 
          savedNotes={this.state.savedNotes}
        />
      </div>
    );
  }
}

class Writing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userInput : '이 곳에 입력 해주세요'
    }
  }

  handleSave = (e, userInput) => {
    this.props.save(userInput)
    e.preventDefault();
  }

  handleChange = (e) => {
    console.log(e.target)
    this.setState({
      userInput: e.target.value
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        userInput: ''
      })
    }, 3000)
  }
  render() {
    return (
      <form onSubmit={(e) => this.handleSave(e, this.state.userInput)}>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <input
          type="submit"
        />
      </form>

    )
  }
}

class Notes extends Component {

  
  render() {
    const savedNotes = this.props.savedNotes;

    return (
      <div>
        {[...savedNotes]}
      </div>
    )
  }
}

export default App;
