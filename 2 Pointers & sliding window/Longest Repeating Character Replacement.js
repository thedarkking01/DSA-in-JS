/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let i=j=0
    let map={}
    map[s[0]]=1
    let maxws=0
    while(j<s.length){
        if(iswindowvalid(map,k)){
            maxws=Math.max(maxws,j-i+1)
            j++;
            map[s[j]] = (map[s[j]] || 0) + 1;
        }
        else{
            map[s[i]]--;
            ++i
        }
    }
    return maxws
};

var iswindowvalid = function(map,k){
    let totalcount=0
    let maxcount=0
    for(let i=0;i<26;i++){
        // ascii val 65-> A
        let char=String.fromCharCode(i+65)
        if(map[char]){
            totalcount+=map[char]
            maxcount=Math.max(maxcount,map[char])
        }
    }
    return (totalcount-maxcount <=k)
}
// time complexity: O(n)
// space complexity: O(1) since we are storing only 26 characters in map