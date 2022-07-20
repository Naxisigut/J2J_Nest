export default {
  throttleWrapper(func, timeout){
    let timer = null
    return function(...argsArr){
      // console.log(this);
      if(timer)return
      timer = setTimeout(()=>{
        clearTimeout(timer)
        timer = null;
      }, timeout);
      return func.apply(this, argsArr)
    }
  }
}