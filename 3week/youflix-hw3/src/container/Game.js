import React, {Component} from "react"
import ContentList from "../component/contentList/ContentList"
import axios from 'axios'

export default class Game extends Component {

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
            console.log({...item})
            list.push({id:item.id, name:item.snippet.title})
        })
        return list
    }

    componentDidMount() {
        this.fetchYoutube()
    }

    // youtube videos api : https://developers.google.com/youtube/v3/docs/videos/list#videoCategoryId
    // youtube categoryId : https://gist.github.com/dgp/1b24bf2961521bd75d6c
    fetchYoutube = () => {
        const categoryIdOfGaming = 20
        const maxResultSize = 21
        const token = 'AIzaSyA2oEpIi9JSjjUk4_0zxcBfDg8iscuJXzs'
        axios.get(
            'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular' +
            '&videoCategoryId=' + categoryIdOfGaming +
            '&key=' + token +
            '&maxResults=' + maxResultSize
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
                <ContentList contents={this.state.contents}/>
            </div>
        )
    }
}