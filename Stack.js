/**
 * 十进制数N转换为其他n进制
 */

 function converse(N, n) {
     let ret = [];
     while(N) {
         ret.push(N % n);
         N = Math.floor(N / n);
     }
     return parseInt(ret.reverse().join(''));
 }
 /**
  * 将n进制数N转换为十进制
  */
  function reConverse(N, n) {
      let arr = N.toString().split('');
      let num = parseInt(arr.shift());
      while(arr.length > 0) {
          num = num * n + parseInt(arr.shift());
      }
      return num;
  }
