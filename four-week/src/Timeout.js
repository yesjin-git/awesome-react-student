function timeout(){
    setTimeout(()=>{
        console.log("Execute after 1 second.");
    }, 1000)    
}
timeout();
console.log("Direct Execute.");