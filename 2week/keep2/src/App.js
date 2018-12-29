import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedNotes: [
        "default1",
        "default2"
      ]
    }
  }

  save = (note) => {
    const savedNotes = this.state.savedNotes
    this.setState({
      savedNotes: [
        ...savedNotes,
        note
      ]
    })
    console.log(note + 'is saved')
  }


  render() {
    return (
      <div>
        <Writing save={this.save} />
        <Notes savedNotes={this.state.savedNotes} />
      </div>
    );
  }
}


class Writing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: 'aaa'
    }
  }

  handleSave = (event) => {
    this.props.save(this.state.userInput)
    this.setState({
      userInput: ""
    })
    event.preventDefault();
  }


  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSave}>
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
    const savedNotes = this.props.savedNotes
    return (
      <div>
        {savedNotes.map((note) => (
          <Note content={note} />
        ))}
      </div>
    )
  }
}

class Note extends Component {
  render() {
    const content = this.props.content

    return (
      <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <span class="card-title">Card Title</span>
              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
