import React, {Component} from 'react';

class Edit extends Component{  
    constructor(props) {
        super(props)
        this.state = {
            title:this.props.title,
            content:this.props.content,
            view: this.props.view
        }
      }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };   
    
    handleSubmit = (e) => {
        const {view} = this.props;
        this.props.edit2(this.state, this.props.index);
        console.log(this.state.title, this.state.content)
        console.log(view);
        // {view ? ('트루') : ('펄스')}
        // this.setState({
        //     view : 'false'
        // })
        e.preventDefault(); 
      };
      
    render(){ 
        return(
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
                <input type='submit' value='edit' />
            </form>
            </div>
        )
    }
}

export default Edit;