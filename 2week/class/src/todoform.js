import React from 'react';

export default class TodoForm extends React.Component{
  state = {
    text:''
  } 

handleChange = e =>{
    this.setState({
        [e.target.name] :e.target.value
    }); 
}

handleSubmit = e =>{
    e.preventDefault(); 
    this.props.onSubmit({
        text:this.state.text,
        complete: false
    });
}


  render(){ 
    return (
        <>
        <form onSubmit={this.handleSubmit}>

                <input 
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                placeholder="todo..."
                />

                <input type="submit" />
        </form>
        </>
    )
  }
}  