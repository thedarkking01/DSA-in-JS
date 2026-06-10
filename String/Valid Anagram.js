/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map={}
    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=1
        }else{
            map[s[i]]++
        }
    }
    for(let i=0;i<t.length;i++){
        if(!map[t[i]]){
            return false
        }
        map[t[i]]--
    }
    return true 
};
// time complexity: O(n) where n is the length of the longer string between s and t
//space complexity: o(1)