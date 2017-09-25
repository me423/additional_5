module.exports = function check(str, bracketsConfig) {
  // your solution
  if ((str.length % 2 !== 0) || (str.length == 0)){
  	return false;
  }
  function findCloseBracket(openBracket, bracketsConfig) {
        var result;
        bracketsConfig.forEach(function(item) {
            if (openBracket == item[0]) result = item[1]
        }); 	

        return result;
   };
   function delString(str, start, end) {
        return newString = str.substring(0, start) + str.substring(end + 1);
    }
    var length = str.length;
    for (var i = 0; i < length - 1; i++) {
        if (str[i + 1] == findCloseBracket(str[i], bracketsConfig)) {
            str = delString(str, i, i + 1);
            i = -1;
            length = length - 2;
        }
    }
    if (str.length == 0) return true;
    else return false;
}
