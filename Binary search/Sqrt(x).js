/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2) return x;
    let l = 0;
    let r = x;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (m * m <= x) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return r;
};
//time complexity: O(log n)
//space complexity: O(1)