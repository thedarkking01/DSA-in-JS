/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i=j=0
    let map=new Map()
    let maxws=0
    // is my element is in map and also check the element is in window
    for (let j = 0; j < s.length; j++) {
        if (map.has(s[j]) && map.get(s[j]) >= i) {
            i = map.get(s[j]) + 1;
        }
        map.set(s[j], j);

        let currws = j - i + 1;
        maxws = Math.max(maxws, currws);
    }
    return maxws
};
// time complexity: O(n)
// space complexity: O(n)