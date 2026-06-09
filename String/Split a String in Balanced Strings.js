// approch 1: by one variables temp 
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let temp=0
    let count=0
    for(let i=0;i<s.length;i++){
        if(s[i]=='R'){
            temp++;
        }else{
            temp--;
        }
        if(temp==0){
            count++
        }
    }
    return count
};
// time complexity: O(n) where n is the length of the string s
// space complexity: O(1) since we are using a constant amount of space to store the variables temp and count

// approch 2: by two variables r and l
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let r=0
    let l=0
    let count=0
    for(let i=0;i<s.length;i++){
        if(s[i]=='R'){
            r++
        }else if(s[i]=='L'){
            l++
        }
        if(r==l){
            count++
        }
    }
    return count
};