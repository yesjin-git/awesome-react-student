import React, { Component } from 'react';
import axios from 'axios'
import ContentList from '../component/contentList/ContentList.js'

export default class Search extends Component {

    state = {
        keyword:"",
        contents: []
    }

    handleChange = (e) => {
        this.setState({keyword:e.target.value})
    }

    handleSubmit = (e) => {
        this.fetchSearch(this.state.keyword)
        e.preventDefault()
    }
    // preventDefault : event 하지마!

    setContents = (data) => {
        let list = []
         data.items.forEach((item, index) => {
           if(item.id.videoId) {
             list.push({id:item.id.videoId,name:item.snippet.title})
           }
         })
         return list
     }

    fetchSearch = async (keyword) => {
        const maxResults = 30
        const token = 'AIzaSyASlUxKp9-sRxTnJUghY0f9D0ia0Iqp91U'
        // var는 너무 글로벌해서 관리가 어려워서 사용 x, let 보다 const 를 자주 사용
        try {
            const {data} = await axios.get('https://www.googleapis.com/youtube/v3/search?q='+ keyword +'&part=snippet&key='+ token +'&maxResults='+maxResults)
            // 여러 값들 중에서 data 부분만 저장하겠다
            this.setState({contents: this.setContents(data)})
        } catch {

        }
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.keyword} onChange={this.handleChange} />
                </form>
                <ContentList contents={this.state.contents} />
            </div>
        )
    }
}