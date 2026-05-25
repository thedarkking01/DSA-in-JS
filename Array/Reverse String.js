//https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len=s.length
    let half=Math.floor(len/2)
    for(let i=0;i<half;i++){
        temp=s[i]
        s[i]=s[len-1-i]
        s[len-1-i]=temp
    }
};

// time complexity: O(n)
// space complexity: O(1)