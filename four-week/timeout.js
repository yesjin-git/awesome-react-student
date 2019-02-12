function timeout(){
  setTimeout(() => {
    console.log('1초 뒤 실행');
  }, 1000);
}

timeout();
console.log('바로 실행');