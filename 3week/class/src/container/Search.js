import React, { Component } from 'react'
import axios from 'axios'
import ContentList from '../component/contentList/ContentList'

export default class Search extends Component {
    state = {
        keyword : null,
        contents : []
    }

    handleInputChange = (e) =>{
        this.setState({keyword : e.target.value})
    }

    handleSubmit = (e)=>{
        this.fetchSearch(this.state.keyword)
        e.preventDefault();
    }

    setContents = (data) => { 
        let list = []
         data.items.forEach((item, index) => {
             list.push({id:item.id.videoId,name:item.snippet.title})
         })
         return list
       }

    fetchSearch = async keyword => {
        let maxResults = 30;
        let token = 'AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY'

        try{
            const {data} = await axios.get('https://www.googleapis.com/youtube/v3/search?q='+keyword+'&part=snippet&key='+token+'&maxResults='+maxResults)
            console.log(data)
            this.setState({contents : this.setContents(data)})
        }catch{

        }
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Search</label>
                        <input type="text" value={this.state.keyword} onChange={this.handleInputChange}></input>
                    </form>
                </div>
                <ContentList contents={this.state.contents} />
            </div>
        )
    }
}
