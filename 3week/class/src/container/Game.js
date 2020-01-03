import React, {Component} from 'react';
import ContentList from "../component/contentList/ContentList";
import axios from 'axios';

class MainView extends Component {
    constructor(props) {
        super(props);
        this.state={
            //전체 화면 영상
            fullContent:{},
            //영상 리스트
            contents: []
        };
    }
    //서버로 받은 데이터 가공하는 매서드
    setContents=(data)=>{
        let list=[]
        data.items.forEach((item,index)=>{
            list.push({id:item.id,name:item.snippet.title})
        })
        return list
    }
    componentDidMount() {
        this.fetchYoutube();
    }

    //유투브 데이터 가져오기
    fetchYoutube=()=>{
        const maxResults= 30
        const token = 'AIzaSyBbqaKKQoPQ_3njWfhavWM7YrV7M_M1C68'
        const url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular' + '&videoCategoryId=' + 20 + '&key=' + token + '&maxResults=' + maxResults;
        axios.get(url)
            .then(
                //데이터 전달되었는지 확인
                // response=>{console.log("success");}
                ({data})=>{
                    // 데이터 확인(유투브에서 가져오는 데이터 중에서 data만 가져오기)
                    console.log(data);
                    // 위의 setContents 메서드로 데이터 받은것 재가공
                    const list = this.setContents(data)

                    this.setState({
                        contents:list.slice(1,list.length)

                    })
                    console.log(this.state.contents);

                }

            )
    }

    render() {
        return (
            <div className="mainView">
                {/*<div>리스트 화면 영역</div>*/}
                <p>Game</p>
                <ContentList contents={this.state.contents}/>
            </div>
        );
    }
}

export default MainView;