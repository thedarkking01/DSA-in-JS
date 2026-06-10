// approch 1: by hash map sort
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map={}
    for(let i=0;i<strs.length;i++){
        let sortedval=strs[i].split("").sort().join("")
        if(!map[sortedval]){
            map[sortedval]=[strs[i]]
        }else{
            map[sortedval].push(strs[i])
        }
    }
    return [...Object.values(map)]
};
// time complexity: O(n*klogk) where n is the number of strings in the input array strs and k is the maximum length of a string in strs (due to sorting each string)
// space complexity: O(n*k) where n is the number of strings in the input array strs and k is the maximum length of a string in strs

// approch 2: by hashed key
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map={}
    for(let i=0;i<strs.length;i++){
        let freqarr = new Array(26).fill(0);
        let s=strs[i]
        for(let j=0;j<s.length;j++){
            let index=s[j].charCodeAt()-'a'.charCodeAt();
            freqarr[index]++
        }
        let key=""
        for(let k=0;k<26;k++){
            key=key+String.fromCharCode(k)+freqarr[k];
        }
        if(!map[key]){
            map[key]=[s]
        }else{
            map[key].push(s)
        }
        
    }
    
    return [...Object.values(map)]
};
// time complexity: O(n*k) where n is the number of strings in the input array strs and k is the maximum length of a string in strs (due to counting the frequency of characters in each string)
// space complexity: O(n*k) where n is the number of strings in the input array strs and k is the maximum length of a string in strs (due to creating a frequency array for each string and storing the grouped anagrams in the hash map)