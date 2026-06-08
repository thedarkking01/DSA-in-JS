/**
 * @param {string} s
 * @return {number}
 */
// approach 1: by two loops
var lengthOfLastWord = function(s) {
    let n=s.length-1
    while(n>=0){
        if(s[n]==" "){
            --n;
        }else{
            break
        }
    }

    let count=0
    while(n>=0){
        if(s[n]!=" "){
            --n;
            count++;
        }
        else break
    }
    return count
};

// approach 2: by one loop
var lengthOfLastWord = function(s) {
    let n=s.length-1
    let count=0
    while(n>=0){
        if(s[n]!=" "){
            --n;
            count++;
        }
        else break
    }
    return count
};

// time complexity: O(n) where n is the length of the string
// space complexity: O(1)