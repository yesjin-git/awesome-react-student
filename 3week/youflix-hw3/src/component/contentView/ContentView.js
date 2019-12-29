import React, {Component} from "react"
import "./ContentView.css"

export default class ContentView extends Component {
    render() {
        return (
            <div className="ContentView">
                <iframe
                    className="content-view-iframe"
                    frameBorder="0"
                    src={"https://www.youtube.com/embed/" + this.props.match.params.id}
                    allowFullScreen={true}
                    allow="autoplay; encrypted-media"
                />
            </div>
        )
    }
}