/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n=haystack.length
    let m=needle.length
    for(let i=0;i<=n-m;i++){
        let j=0
        for(j=0;j<m;j++){
            if(haystack[i+j]!=needle[j]){
                break
            }
        }
        if(j===m){
            return i
        }
    }
    return -1
};
//time complexity: O(n*m)
//space complexity: O(1)

// approach - 2: KMP algorithm
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;

    let n = haystack.length;
    let m = needle.length;

    // Build LPS
    let lps = new Array(m).fill(0);
    let i = 0;
    let j = 1;

    while (j < m) {
        if (needle[i] === needle[j]) {
            lps[j] = i + 1;
            i++;
            j++;
        } else {
            if (i === 0) {
                lps[j] = 0;
                j++;
            } else {
                i = lps[i - 1];
            }
        }
    }

    // Search
    i = 0;
    j = 0;

    while (i < n) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        } else {
            if (j === 0) {
                i++;
            } else {
                j = lps[j - 1];
            }
        }

        if (j === m) {
            return i - m;
        }
    }

    return -1;
};