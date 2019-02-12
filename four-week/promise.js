function _promise (param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('지금 실행');
      if(param){
        resolve('실행 성공');
      } else {
        reject('실행 실패');
      }
    });
  }, 1000);    
}

// _promise(true)
// .then(text => {
//   console.log('그 다음 실행');
//   console.log(text);
//   return '그담담실행'
// }).catch(error => {
//     console.log(error);
// }).then(text =>{
//   console.log('과연');
//   console.log(text);
// });

async function excute () {
  try{
    const result = await _promise(false);
    console.log('그 돠음 실행');
    console.log(result);
  }catch(e){
    console.log('error');
    console.log(e);
  }
}

excute();