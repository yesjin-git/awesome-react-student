import React, {Component} from 'react'
import Writing from "./Writing"
import Note from "./Note"


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            savedNotes: [
            ]
        }
    }

    /**
     * save the Note with title & content
     *
     * @param title
     * @param content
     */
    saveNotes = ({title, content}) => {
        const {savedNotes} = this.state
        const latestId =
            (savedNotes.length === 0) ? -1 : savedNotes[savedNotes.length - 1].id

        console.log((latestId + 1) + ":" + title + ":" + content + " is saved!!")

        this.setState({
            savedNotes: [
                ...savedNotes,
                {
                    id: latestId + 1,
                    title: title,
                    content: content
                }
            ]
        })
    }

    /**
     *
     * @param id
     * @param title
     * @param content
     */
    updateNotes = ({id, title, content}) => {
        console.log("update " + id + ":" + title + ":" + content)

        const {savedNotes} = this.state

        const updatedNotes = savedNotes.map(note => {
            if (note.id === id) {
                return {
                    id: id,
                    title: title,
                    content: content
                }
            } else {
                return {
                    id: note.id,
                    title: note.title,
                    content: note.content
                }
            }
        })

        this.setState({
            savedNotes : [
                ...updatedNotes
            ]
        })
    }

    /**
     * delete the Note with Id
     *
     * @param id
     */
    delete = (id) => {
        console.log(id + " is deleted")
        const deletedNotes = this.state.savedNotes.filter(note => (note.id !== id))
        this.setState({
            savedNotes: [
                ...deletedNotes
            ]
        })
    }

    finishEditing = () => {
        console.log("editing is done")
    }

    render() {
        return (
            <div>
                <Writing
                    editType="NEW"
                    save={this.saveNotes}
                    done={this.finishEditing}
                /><br/><br/>

                <div className='row'>
                    {
                        this.state.savedNotes.map(note => (
                            <Note
                                key={note.id}
                                id={note.id}
                                title={note.title}
                                content={note.content}
                                del={this.delete}
                                save={this.updateNotes}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default App
