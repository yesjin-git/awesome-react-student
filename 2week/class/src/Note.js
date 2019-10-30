import React, {Component} from 'react';
import "./Note.css";
import Edit from './Edit.js';

class Note extends Component {

    handleClickDelete = () =>{
        this.props.delete(this.props.index);
    };

    noteClickFunc = () =>{        
        this.props.edit(this.props.index);     
    } 
 
    render() {
        const { save,edit2,index,content,title,view } = this.props;
  
      return (
        <div className="Note col s12 m4 l3">
            <div className="DeleteBtn">
                <div className="DeleteBtn btn-floating btn-large">
                <i id="Icon" className="material-icons" onClick={this.handleClickDelete}>delete</i>
                </div>
            </div>
            <div className="card yellow lighten-4"> 
                <div className="card-content black-text"> 
                <span className="card-title" onClick={this.noteClickFunc}>                  
                    {view ? (
                    <>
                    <Edit 
                    save={save} 
                    edit2={edit2} 
                    index={index} 
                    title={title} 
                    content={content} 
                    view={view} 
                    />
                    </>
                    ) : 
                    (
                    <>
                    <h3 onClick={this.noteClickFunc}>{title}</h3>
                    <p onClick={this.noteClickFunc}>{content}</p>
                    </>
                    )
                    }
                </span>
                </div>  
            </div>
        </div>
        
      )
    }
  }
  
  export default Note;