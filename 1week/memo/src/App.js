import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Card extends Component {
  render() {
    return (
      <div className="">
        <div className="card bg-light mb-3" style={{ maxWidth: '18rem' }} >
          {/* <div className="card-header">Header</div> */}
          <div className="card-body">
            {/* <h5 className="card-title">Primary card title</h5> */}
            <p className="card-text">{this.props.memo}</p>
          </div>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.props = {

    }
    this.state = {
      value: '',
      history: [
        { value: 'defalut' },
        { value: 'default'}
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handle = this.handleSubmit.bind(this);
  }
  //이벤트 개념 가르치기 javascript
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value == '') {
      alert('not submitted');
    } else {
      let history = this.state.history
      alert('submitted: ' + this.state.value);
      event.preventDefault();
      this.setState({
        history: [...history, { value: this.state.value}]

      })
    }
  }

  render() {
    // function Cards() {}와 같음
    const Cards = () => {
      const cards = this.state.history.map(
        (savedMemo) => (
          <Card memo={savedMemo.value}/>
        )
      )

      return (
        <div>
          {cards}
        </div>
      )
    }

    return (
      <div>
        <div className="WritingMemo">
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="cards"><Cards /></div>
        <div className="App">
          {/* class => className , style ="max-width: 18rem;" => style={{ maxWidth: '18rem'}} */}
        </div>
      </div >
    );
  }
}


export default App;
