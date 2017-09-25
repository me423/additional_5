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
   
}
