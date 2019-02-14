import React, { Component } from "react";
import Writing from "./Writing";
import Note from "./Note";
import "./App.scss";

class App extends Component {
  state = {
    //savedNotes: [{ id: 1, title: "aaa", content: "111" }]
    savedNotes: []
  };

  save = ({ title, content }) => {
    const savedNotes = this.state.savedNotes;
    const id =
      savedNotes.length === 0 ? 0 : savedNotes[savedNotes.length - 1].id + 1;

    this.setState({
      savedNotes: [...savedNotes, { id: id, title: title, content: content }]
    });
  };

  render() {
    return (
      <div className="App container">
        <Writing save={this.save} />
        <div className="Notes row">
          {this.state.savedNotes.map(note => (
            <Note key={note.id} title={note.title} content={note.content} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
