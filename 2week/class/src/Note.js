import React, {Component} from "react"
import "./Note.css"
import EditText from './EditText';
 

class Note extends Component { 


    handleClickDelete = () =>{ 
        this.props.delete(this.props.index);  
    } 
   
    handleClickEdit = () =>{   
        this.props.edit(this.props.index); 
    }        
           

    handleClickNormal = (indexes) =>{  
      // console.log("normal");    
      this.props.normal(indexes);  
    }      
     
    

    render() { 
      const { content, title, status } = this.props
   
      return (   
        <div className="Note col s12 m4 l3">
       
      <div className="DeleteBtn"> 
        <div className="DeleteBtn btn-floating btn-large">
          <i onClick={this.handleClickDelete} id="Icon" className="material-icons">delete</i>
        </div>   
      </div>  
  
      <div className="card yellow lighten-4">  
        <div className="card-content black-text">
       
                
          <span className="card-title">  
  
 
        { status ? (<EditText title={title} index={this.props.index} content={content} handleClickNormal={this.handleClickNormal} editSave={this.props.editSave} />) : ( <> {title}<br />{content} </>)}         
    
                 
          { !status && (<> <div className="check-mark" onClick={this.handleClickEdit}>수정하기</div> </>) }
          
  
           
            </span>  
          <p >{status}</p>     


  


        </div> 
      </div>  
    </div>  
      ) 
    }  
  }

  export default Note;