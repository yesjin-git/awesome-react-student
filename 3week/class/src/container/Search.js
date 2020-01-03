import React, {Component} from 'react';
import axios from 'axios';
import ContentList from '../component/contentList/ContentList.js';

export default class Search extends Component {
    state ={
        keyword:"",
        contents:[]
    }
    handleChange=(e)=>{
        this.setState({keyword:e.target.value})
    }
    handleSubmit=(e)=>{
        this.fetchSearch(this.state.keyword)
        e.preventDefault()
        //새로고침 방지하기 위해 이벤트 막음 (이벤트 버블링)
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
    fetchSearch=async (keyword)=>{
        const maxResults= 30
        //maxResult = 몇개를 불러올지 지정해준 것
        const token = 'AIzaSyBbqaKKQoPQ_3njWfhavWM7YrV7M_M1C68'
        //google api key 발급받아서  다시 해보기
        try{
            //데이터 불러오기
            const {data} = await axios.get('https://www.googleapis.com/youtube/v3/search?q='+keyword+'&part=snippet&key='+token+'&maxResults='+maxResults)
            //data만 꼭 집어서 가져오는 것
            console.log(data);
            //id와 title 형태로 가공
            this.setState({contents:this.setContents(data)})

        }catch{

        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.keyword} onChange={this.handleChange}/>
                </form>
                <ContentList contents={this.state.contents}/>
            </div>
        );
    }
}

