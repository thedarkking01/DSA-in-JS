/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let n=num.length-1
    while(n>=0){
        if(num[n]%2!=0){
            return num.substring(0,n+1)
        }
        n--
    }
    return ""
};

// time complexity: O(n) where n is the length of the string num
// space complexity: O(1)