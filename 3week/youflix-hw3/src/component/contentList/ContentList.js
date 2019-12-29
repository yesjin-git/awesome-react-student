import React, {Component} from "react"
import "./ContentList.css"
import Content from "../content/Content"
import PropTypes from "prop-types"

export default class ContentList extends Component {

    listRender() {
        console.log(this.props.contents)
        const colCntPerRow = 4
        const lineCnt = Math.ceil(this.props.contents.length / colCntPerRow)
        let component = []
        for (let i = 0; i < lineCnt; i++) {
            const startIndex = i * colCntPerRow
            let dataPerRow = this.props.contents.slice(startIndex, startIndex + colCntPerRow)

            //TODO: more think about this part ~
            component.push(
                <div className="row">
                    {
                        dataPerRow.map((item, index) => {
                            return (
                                // *** 반복문 안에서 jsx를 사용할때는 반드시 key를 써줘야 한다. ***
                                // col-md-3은 한 줄을 12등분 했을때 3칸만큼을 차지 하겠다는 의미이다.
                                <div className="col-md-3" key={index}>
                                    <Content content={item} onClick={this.props.onClick}/>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
        console.log({...component})
        return component
    }

    render() {
        return (
            <div className = "contentList align-items-center justify-content-center">
                {this.listRender()}
            </div>
        )
    }
}

ContentList.propTypes = {
    contents: PropTypes.array,
    onClick: PropTypes.func
}