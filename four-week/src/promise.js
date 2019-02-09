function _promise(param){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('right now');
            if (param){ //param이 있다면
                //param();
                resolve("실행성공");
            }else{
                reject("실행 실패");
            }
        }, 1000);
    });
}
/*
_promise(true)
.then(text => {
    console.log('success');
},
error => {
    console.log('failed');
})//첫번째는 성공한 handler, 두번째는 실패한 handler
console.log('#############');
_promise(false)
.then(text => {
    console.log('success');
    console.log(text);
})
.catch(e => {
    console.log(e);
})
*/
async function excute(){
    try{
        const result = await _promise(true);
        console.log("그 다음 실행");
        console.log(result);
    }catch(e){
        console.log(e);
    }
}
excute()