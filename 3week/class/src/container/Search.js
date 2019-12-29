import React, {Component} from 'react'
import axios from 'axios'
import ContentList from '../component/contentList/ContentList'

export default class Search extends Component {

    state = {
        keyword: "",
        contents: []
    }
    handleChange = (e) => {
        this.setState({keyword: e.target.value})
    }

    handleSubmit = (e) => {
        this.fetchSearch(this.state.keyword)
        e.preventDefault()
    }

    setContents = (data) => {
        let list = []
        data.items.forEach((item, index) => {
            if(item.id.videoId) {
                list.push({id:item.id.videoId, name:item.snippet.title})
            }
        })
    }

    fetchSearch = async (keyword) => {
        const maxResults = 30
        const token = 'AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY'

        try {
            const {data} = await axios.get(
                'https://www.googleapis.com/youtube/v3/search?q=' + keyword +
                '&part=snippet&key=' + token + '&maxResults=' + maxResults)

            this.setState({contents:this.setContents(data)})

        } catch {

        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.keyword} onChange={this.handleChange}/>
                </form>
                <ContentList contents={this.state.contents} />
            </div>
        )
    }

}