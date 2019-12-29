import React, {Component} from "react"
import ContentList from "../component/contentList/ContentList"
import FullContent from "../component/fullcontent/FullContent"
import axios from 'axios'

export default class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullContent: {},
            contents: []
        }
    }

    setContents = (data) => {
        let list = []
        data.items.forEach((item, index) => {
            list.push({id:item.id, name:item.snippet.title})
        })
        return list
    }

    componentDidMount() {
        this.fetchYoutube()
    }

    fetchYoutube = () => {
        const token = 'AIzaSyA2oEpIi9JSjjUk4_0zxcBfDg8iscuJXzs'
        axios.get(
            'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=' + token + '&maxResults=21'
        ).then(({data}) => {
            const list = this.setContents(data)
            this.setState({
                contents:list.slice(1, list.length),
                fullContent:list[0]
            })
        })
    }

    render() {
        return (
            <div className="mainView">
                <FullContent content={this.state.fullContent}/>
                <ContentList contents={this.state.contents}
                             onClick={(content) => {this.setState({fullContent:content})}}/>
            </div>
        )
    }
}