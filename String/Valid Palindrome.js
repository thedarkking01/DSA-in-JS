/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase()
    let filteredstring=""
    let rev=""
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){
            filteredstring=filteredstring+s[i]
            rev=s[i]+rev
        }
    }
    return filteredstring==rev
};
// time complexity: O(n) where n is the length of the string s
// space complexity: O(n) since we are creating a new string filteredstring to store the alphanumeric characters from the original string s

//approch 2: by two pointers
s=s.toLowerCase()
let left=0
let right=s.length-1
while(left<right){
    if(!s[left].match(/[a-z0-9]/i)){
        left++
    }
    else if(!s[right].match(/[a-z0-9]/i)){
        right--
    }
    else if(s[left]==s[right]){
        left++
        right--
    }
    else{
        return false
    }
}
return true 
// time complexity: O(n) where n is the length of the string s
// space complexity: O(1) since we are using a constant amount of space to store the variables left and right