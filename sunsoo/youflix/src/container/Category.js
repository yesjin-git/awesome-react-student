import React, { Component } from 'react';
import axios from 'axios';
import ContentList from '../component/contentList/ContentList';

export default class Category extends Component {
    state = {
        contents: [],
        keyword: this.props.location.pathname.replace('/category/',''),
        error: {}
    };
    componentDidMount() {
        this.fatchSearch(this.state.keyword);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.location.pathname.replace('/category/','') !== prevProps.location.pathname.replace('/category/',''))
            this.fatchSearch(this.props.location.pathname.replace('/category/',''));
    }

    setContents = (data) => {
        let list = []
        data.items.forEach((item, index) => {
            if(item.id.videoId) {
                list.push({id:item.id.videoId,name:item.snippet.title})
            }
        })
        return list
     }
     async fatchSearch(keyword) {
        let maxResults = 30;
        let token = 'AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY';

        //예외처리 
        try {
            const { data } = await axios.get('https://www.googleapis.com/youtube/v3/search?q='+keyword+'&part=snippet&key='+token+'&maxResults='+maxResults);
            // console.log(data);
            this.setState({ contents: this.setContents(data) });
        } catch (e) {
            console.log(e)
            this.setState({error: "error message"})
        }
    }
    render() {
        // console.log(this.state.contents);
        return (
            <div>
                <p>keyword: {this.state.keyword}</p>
                <ContentList contents={this.state.contents} />
            </div>
        )
    }
}
