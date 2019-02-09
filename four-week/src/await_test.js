
async function excute(){
    try{
        const result = await _promise(true);
        console.log("그 다음 실행");
        console.log(result);
    }catch(e){
        console.log(e);
    }
}