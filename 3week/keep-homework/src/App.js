import React, { Component } from "react";
import SimpleStorage from "react-simple-storage";

import Writing from "./Writing";
import Note from "./Note";
import "./App.scss";

class App extends Component {
  state = {
    //savedNotes: [{ id: 1, title: "aaa", content: "111" }]
    savedNotes: []
  };

  add = ({ title, content }) => {
    const { savedNotes } = this.state;
    const id =
      savedNotes.length === 0 ? 0 : savedNotes[savedNotes.length - 1].id + 1;

    this.setState({
      savedNotes: [...savedNotes, { id: id, title: title, content: content }]
    });
  };

  save = ({ id, title, content }) => {
    const { savedNotes } = this.state;
    const index = savedNotes.findIndex(note => note.id === id);

    this.setState({
      savedNotes: [
        ...savedNotes.slice(0, index),
        {
          id,
          title,
          content
        },
        ...savedNotes.slice(index + 1, savedNotes.length)
      ]
    });
  };

  delete = id => {
    const { savedNotes } = this.state;
    const index = savedNotes.findIndex(note => note.id === id);

    /*
    const filteredValues = this.state.savedNotes.filter(x => x.id !== id);
    this.setState({
      savedNotes: filteredValues
    });
    */

    this.setState({
      savedNotes: [
        ...savedNotes.slice(0, index),
        ...savedNotes.slice(index + 1, savedNotes.length)
      ]
    });
  };

  render() {
    return (
      <div className="App container">
        <SimpleStorage parent={this} />
        <Writing add={this.add} />
        <div className="Notes row">
          {this.state.savedNotes.map(note => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              delete={this.delete}
              save={this.save}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
