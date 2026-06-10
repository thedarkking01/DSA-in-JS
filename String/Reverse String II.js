/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s=s.split("")
    for(let x=0;x<s.length;x=x+(2*k)){
        let n=k
        let mid=Math.floor(n/2)
        for(let i=0;i<mid;i++){
            tmp=s[x+i]
            s[x+i]=s[x+n-1-i]
            s[x+n-1-i]=tmp
        }
    }
    return s.join("")
};
// time complexity: O(n) where n is the length of the string s
// space complexity: O(n) since we are creating a new array s to store the characters of the original string s and then joining them back into a string at the end