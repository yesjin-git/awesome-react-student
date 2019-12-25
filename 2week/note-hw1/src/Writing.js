import React, {Component} from "react"

/**
 * 2 text fields
 *  - 1st : "title"
 *  - 2nd : "content"
 *
 *  This class is imported to App.js & Note.js
 *
 */

class Writing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            title: this.props.title,
            content: this.props.content,
            editType: this.props.editType,
            showContent: this.props.showContent
        }
    }

    /**
     * event handler for the changing of the input-field
     *
     * @param e
     */
    handleChange = (e) => {
        console.log([e.target.name] + " field is changed ...")
        this.setState({
                [e.target.name]: e.target.value
            }
        )
        // console.log({...e})
    }

    /**
     * event handler for the submit
     *
     * @param e
     */
    handleSubmit = (e) => {
        if (this.state.title === "" || this.state.content === "") {
            alert("You have to input title & content")
            e.preventDefault()
            return
        }

        this.props.save(this.state)
        this.setState({
            title: "",
            content: "",
            showContent: false
        })
        this.props.done()
        e.preventDefault()
    }

    /**
     * event handler for blur
     */
    handleBlur = (e) => {
        if (this.state.title === "" && this.state.content === "" && e.relatedTarget == null) {
            this.setState({
                showContent: false
            })
        }
        // console.log({...e})
    }

    /**
     * event handler for focus
     */
    handleFocus = (e) => {
        this.setState({
            showContent: true
        })
        // console.log({...e})
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    {
                        this.state.editType === "NEW" ?
                            (
                                <div>
                                    <div className="input-field col s6">
                                        <input
                                            type="text"
                                            name="title"
                                            value={this.state.title}
                                            onChange={this.handleChange}
                                            onBlur={this.handleBlur}
                                            onFocus={this.handleFocus}
                                        />
                                        <label className="active" htmlFor="Title">Title</label>
                                    </div>
                                    {
                                        this.state.showContent === true ?
                                            (
                                                <div className="input-field col s6">
                                                    <input
                                                        type="text"
                                                        name="content"
                                                        value={this.state.content}
                                                        onChange={this.handleChange}
                                                        onBlur={this.handleBlur}
                                                        onFocus={this.handleFocus}
                                                    />
                                                    <label className="active" htmlFor="Content">Content</label>
                                                </div>
                                            ) :
                                            (
                                                <div></div>
                                            )
                                    }
                                    <div align="left" margin-left="20px">
                                        <button className="btn waves-effect waves-light" type="submit">
                                            Submit
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                </div>
                            ) :
                            (
                                <div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input
                                                type="text"
                                                name="title"
                                                value={this.state.title}
                                                onChange={this.handleChange}
                                            />
                                            <input
                                                type="text"
                                                name="content"
                                                value={this.state.content}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div align="right">
                                        <button className="btn waves-effect waves-purple btn-small center"
                                                type="submit">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </form>
        )
    }
}

export default Writing