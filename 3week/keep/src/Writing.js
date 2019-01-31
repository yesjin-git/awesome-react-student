import React,{Component} from "react"

class Writing extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isWritingTitleClicked: false,  
        userInput_title: "",
        userInput_content:"",
      }
    }
    //Submitted 건드는 핸들러 함수
    handleSubmit = (e) => {
        const saveData = this.state
        this.props.save(saveData)
        this.setState({
            isWritingTitleClicked: false,
            userInput_title:"",
            userInput_content:""
        })
        e.preventDefault();
    }
    handleFocus = (e) => {
        console.log("called handleFocus");
        // if(this.state.userInput_content != "") {
        //     this.setState({
        //         isWritingTitleClicked: true
        //     })
        // }else{

        // }
    }
    handleBlur = (e) => {
        console.log("called handleBlur");
        if(!this.state.userInput_content){
            this.setState({
                isWritingTitleClicked: false
            })
        }else{
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

    handleOnClick_InputTitle = () =>{
        if(!this.state.isWritingTitleClicked){
            this.setState({
                isWritingTitleClicked: true
            })
        }
    }
    render() {   
        const writingTitle = (
            <div className="input-field">
                <input autoFocus
                    type='text'
                    name='userInput_title'
                    id='userInput_title'
                    value={this.state.userInput_title}
                    onChange={this.handleChange}
                    onClick={this.handleOnClick_InputTitle}
                    onFocus={this.handleFocus}
                />
            </div>
        )
        const writingContent = (
            <div className="input-field">
                <input autoFocus
                    type='text'
                    name='userInput_content'
                    value={this.state.userInput_content}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
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