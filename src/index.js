module.exports = function longestConsecutiveLength(array) {
  var num = [];
  var counter = 0;
  function compareNumeric(a, b) {
      return a - b;
  }
  var arr = array.sort(compareNumeric);
  num.push(arr[0]);
  if(array.length == 1){
    return 1;
  }
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] - num[num.length-1] == 1 || arr[i] - num[num.length-1] == 0) {
          num.push(arr[i]);
          if(num[num.length-1] === num[num.length-2]){
            num.pop()
          }
      } else {
                  if (num.length > counter) {
                         counter = num.length;
          }           
               num = [];
               num.push(arr[i]);
      }
      }
    return counter;
}      