// brute froce approach: by two loops
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count=0
    for(let i=0;i<stones.length;i++){
        for(let j=0;j<jewels.length;j++){
            if(stones[i]==jewels[j]){
                count++
            }
        }
    }
    return count
};   
// time complexity: O(m*n) where m is the length of jewels and n is the length of stones
// space complexity: O(1)

// optimal approach: by hash set
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count=0
    let jset=new Set(jewels)
    for(let i=0;i<stones.length;i++){
        if(jset.has(stones[i])){
            count++
        }
    }
    return count
};
//s time complexity: O(m+n) where m is the length of jewels and n is the length of stones
// space complexity: o(1) 