import React, {Component} from "react"
import Writing from "./Writing"

/**
 * This is the card that contains title and content.
 *
 * features.
 *  - display title & contents
 *  - save
 *  - delete
 *  - some interactions when events are happened.
 */
class Note extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editable: false
        }
        this.textInput = React.createRef()
    }


    /**
     * event handler for deleting.
     *
     * @param e
     */
    handleDelete = () => {
        this.props.del(this.props.id)
    }

    /**
     * event handler for focusIn
     */
    handleFocusIn = () => {
        this.setState({
            editable: true
        })

        document.addEventListener("click", this.handleOutsideClick, false)
    }


    /**
     * event handler for outside click
     *
     * @param e
     */
    handleOutsideClick = (e) => {
        if (this.node != null && this.node.contains(e.target)) {
            return
        }

        if (this.textInput.current != null) {
            this.textInput.current.handleSubmit(e)
            document.removeEventListener("click", this.handleOutsideClick, false)
        }
    }

    /**
     * this function is called when the editing is done.
     */
    finishEditing = () => {
        this.setState({
            editable: false
        })
    }

    render() {
        const {title, content} = this.props
        const {editable} = this.state

        return (
            <div className="Note col s12 m4 l3">
                <div className="card yellow lighten-4" onClick={this.handleFocusIn} ref={node => this.node = node}>
                    <div className="DeleteBtn">
                        <div className="DeleteBtn btn-floating btn-middle red right">
                            <i id="Icon" className="material-icons" onClick={this.handleDelete}>delete</i>
                        </div>
                    </div>
                    {
                        editable === true
                            ? (
                                <div>
                                    <Writing
                                        save={this.props.save}
                                        title={this.props.title}
                                        content={this.props.content}
                                        editType="NOTE"
                                        showContent="true"
                                        id={this.props.id}
                                        done={this.finishEditing}
                                        ref={this.textInput}
                                    />
                                    <br/><br/>
                                </div>
                            )
                            : (
                                <div className="card-content black-text">
                                    <span className="card-title">
                                    <b>{title}</b>
                                    </span>
                                    <p>{content} </p>
                                </div>
                            )
                    }
                </div>
            </div>
        )
    }
}

export default Note