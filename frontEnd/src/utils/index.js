let utils = {};

utils.throttleWrapper = function (func, timeout) {
  let timer = null;
  return function (...argsArr) {
    // console.log(this);
    if (timer) return;
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
    }, timeout);
    return func.apply(this, argsArr);
  };
};

utils.returnMinIndex = function(arr){
  let val = Math.min(...arr)
  return arr.findIndex((item)=>{
    return item == val
  })
}

export default utils;
