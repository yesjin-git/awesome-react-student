import React, {Component} from "react"
import ContentList from "../component/contentList/ContentList"
import axios from 'axios'

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            contents: []
        }
    }

    handleSubmit = (e) => {
        this.fetchSearch(this.state.keyword)
        e.preventDefault()
    }

    parseContents = (data) => {
        let list = []
        data.items.forEach((item, index) => {
            if(item.id.videoId) {
                list.push(
                    {
                        id: item.id.videoId,
                        name: item.snippet.title
                    })
            }
        })
        return list
    }

    fetchSearch = async (keyword) => {
        const maxResults = 50
        const token = 'AIzaSyA2oEpIi9JSjjUk4_0zxcBfDg8iscuJXzs'
        await axios.get(
            'https://www.googleapis.com/youtube/v3/search?q=' + keyword +
            '&part=snippet&key=' + token + '&maxResults=' + maxResults
        ).then(({data}) => {
            this.setState({contents:this.parseContents(data)})
        })
    }

    render() {
        return (
            <div className="Search">
                <form className="" onSubmit={this.handleSubmit}>
                    <div className="form-group row align-items-center justify-content-center">
                        <div className="col-md-3">
                            <label>검색</label>
                            <input type="text"
                                   value={this.state.keyword}
                                   onChange={(e) => {this.setState({keyword: e.target.value})}}/>
                        </div>
                    </div>
                </form>
                <ContentList contents={this.state.contents}
                />
            </div>
        )
    }
}