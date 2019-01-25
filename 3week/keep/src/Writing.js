import React,{Component} from "react"

class Writing extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isWritingTitleClicked: false,  
        userInput_title: "",
        userInput_content:""
      }
    }
  
    handleSubmit = (e) => {
      console.log('submitted')
      //this.props.save(this.state.userInput)
      this.props.save(this.state.userInput_title, this.state.userInput_content)
      this.setState({
        isWritingTitleClicked: false,
        userInput_title:"",
        userInput_content:""
      })
      e.preventDefault();
    }
    handleFocus = (e) => {
        if(!this.state.isWritingTitleClicked) {
            this.setState({
                isWritingTitleClicked: true
            })
        }
    }
    handleChange = (event) => {
      //console.log('userInput is ' + this.state.userInput)
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleOnClick = () =>{
        this.setState({
            isWritingTitleClicked : true
        })
    }
    render() {   
        const writingTitle = (
            <div className="input-field">
                <input
                    type='text'
                    name='userInput_title'
                    value={this.state.userInput_title}
                    onChange={this.handleChange}
                    onClick={this.handleOnClick}
                    onFocus={this.handleFocus}
                    //onFocus
                />
            </div>
        )
        const writingContent = (
            <div className="input-field">
                <input
                    type='text'
                    name='userInput_content'
                    value={this.state.userInput_content}
                    onChange={this.handleChange}
                />
            </div>
        )
        
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {writingTitle}
            {/* title에 클릭이벤트가 발생한다면
            input content창을 보여줘라 */}
            {this.state.isWritingTitleClicked? writingContent:""}            
            <input
              type='submit'
              value='Submit'
            />
          </form>
        </div>
      )
    }
  }

  export default Writing