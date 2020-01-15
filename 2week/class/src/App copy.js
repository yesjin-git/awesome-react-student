import React, {Component} from "react"
import './App.css';  
import "materialize-css";  
import "materialize-css/dist/css/materialize.min.css"; 
import Note from "./Note"; 
import Writing from "./Writing";    

class App extends Component { 
  constructor(props) {   
    super(props)  
    this.state = {   
      //state의 초기값을 설정합니다.
      savedNotes: [    
        {id: 0, title: "title1", content: "default1", status:false},   
        {id: 1, title: "title2", content: "default2", status:false},    
        {id: 2, title: "title3", content: "default2", status:false}     
      ]   
    }  
  } 
  
 



  delete = (index) =>{  
      const {savedNotes} = this.state; 
 
      // filter 함수를 이용해서 삭제한 애들 Index만 뺴고 재배치
      const filteredNotes = savedNotes.filter((note) => note.id !== index); 
     
      console.log(filteredNotes);  

      this.setState({  
        savedNotes: filteredNotes        
      });   

      console.log(index); 
  }    

  
  edit = (index) =>{ 

    
    const {savedNotes} = this.state;   
    
    // console.log(savedNotes); 
   
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.   
    const indexes = savedNotes.findIndex(note => note.id === index);
       
    const selected = savedNotes[indexes]; // 선택한 객체
      
    // const test = [...selected];
   
    console.log(selected);
    // console.log(test);  
  
 
    const nextNotes = [...savedNotes]; // 배열을 복사  
   
     // 기존의 값들을 복사하고, checked 값을 덮어쓰기   
     nextNotes[index] = { 
      ...selected,        
      status: !selected.checked 
    }; 
   

    
    this.setState({    
      savedNotes: nextNotes
    });
     

     
    // console.log(selected);

  } 


  normal = (index) =>{  
    console.log("normal");
    const {savedNotes} = this.state; 
    
  
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.   
    const indexes = savedNotes.findIndex(note => note.id === index);
     
    const selected = savedNotes[indexes]; // 선택한 객체
      


    const nextNotes = [...savedNotes]; // 배열을 복사  
  
     // 기존의 값들을 복사하고, checked 값을 덮어쓰기   
     nextNotes[index] = {
      ...selected,     
      status: selected.checked 
    };   

    this.setState({   
      savedNotes: nextNotes 
    });
   
    // console.log(index);   
    // console.log(selected);  
  }  
 


  editSave = (writingState,index) => { 
    


    // console.log("saved"); 
    const {savedNotes} = this.state;  




    const modifyArr = savedNotes.map(note => note.id === index ? ({...note, title:writingState.title, content:writingState.content}) : note);
 


  
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.   
    const indexes = modifyArr.findIndex(note => note.id === index);
     
    const selected = modifyArr[indexes]; // 선택한 객체
        

 
    const nextNotes = [...modifyArr]; // 배열을 복사  
  
     // 기존의 값들을 복사하고, checked 값을 덮어쓰기   
     nextNotes[index] = {
      ...selected,     
      status: selected.checked 
    };   
 
    this.setState({   
      savedNotes: nextNotes   
    });
    
    // console.log("normal");

     // console.log(savedNotes);
  } 
    
  

  

  save = writingState => {

    //설계한 함수의 상태를 확인하기 위해 save를 표시하도록 해봅시다. 
    // console.log(content + "is saved"); 
    const { savedNotes } = this.state;
     
    // 배열의 마지막녀석 id값을 가져옴 
    const lstNoteId = savedNotes.length !== 0? savedNotes[savedNotes.length -1].id : 0;  
     
    // 마지막 녀석의 id에 +1 하여 id로 부여    
    this.setState({     
        savedNotes: [...savedNotes, {id: lstNoteId+1,title: writingState.title, content: writingState.content, status: writingState.status}] 
    });  
    
  }   
  
  render() {   
    return (
      <div className='App'>
        <Writing save={this.save}/>
        {/* 원래 노트를 여러개 보내므로, Notes라고 하는게 좋겠지만 추후에 Note 컴포넌트로 활용할 예정이기 때문에 Note로 명명해 줍시다.*/}
    
        <div className='row'> 
        {this.state.savedNotes.map((note,key) => (          
            // arrow function 사용시 ()소괄호로 하면 바로 return 해주겠다는 의미.
              <Note 
                title={note.title} 
                content={note.content}   
                key={note.id}      
                delete={this.delete}
                edit={this.edit}
                normal={this.normal} 
                status={note.status}   
                editSave={this.editSave} 
             
                index={note.id}/>     
          ))}     
        </div>     
      </div> 
    )   
  }  
} 
 
export default App
