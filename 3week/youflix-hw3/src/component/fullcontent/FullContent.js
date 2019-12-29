import React, {Component} from "react"
import "./FullContent.css"
import ProtoTypes from "prop-types"

export default class FullContent extends Component {
    render() {
        return (
            <div className="FullContent">
                <iframe
                    className="my-iframe"
                    frameBorder="0"
                    src={"https://www.youtube.com/embed/" + this.props.content.id + "?autoplay=1&rel=0"}
                    allowFullScreen={true}
                    allow="autoplay"
                    />
            </div>
        )
    }
}

//TODO : more study - https://ko.reactjs.org/docs/typechecking-with-proptypes.html
FullContent.propTypes = {
    content: ProtoTypes.object
}