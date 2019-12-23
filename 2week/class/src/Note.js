import React, {Component} from "react"

class Note extends Component {
    handleClickDelete = () => {
        this.props.delete(this.props.index)
    }
    
    noteClick = () => {
        console.log(this.props.view);
        // this.setState({
        //   view:false
        // })
    }


    render() {
      const { title, content, view } = this.props
      
      return (
        <div className="Note col s12 m4 l3">
          <div className="DeleteBtn">
            <div className="DeleteBtn btn-floating btn-large">
              <i id="Icon" className="material-icons" onClick={this.handleClickDelete}>delete</i>
            </div>
          </div>
          <div className="card yellow lighten-4" onClick={this.noteClick}>
            {view ?
            (
            <>
            <div className="card-content black-text">
              <span className="card-title">
                {title}
              </span>
              <p>{content}</p>
            </div>
            </>
            )
            :
            (
            <>
            <div className="card-content black-text">
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                name='title'
                value={title}
                onChange={this.handleChange}
              />
              <input
                type='text'
                name='content'
                value={content}
                onChange={this.handleChange}
              />
              <input
                type="submit"
                value="submit"
              />
            </form>
          </div>
          </>
            )
            }
          </div>
        </div>
      )
    }
  }

export default Note;