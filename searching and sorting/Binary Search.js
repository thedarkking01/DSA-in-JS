/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0
    let r=nums.length-1
    while(l<=r){
        m=Math.floor((l+r)/2)
        if(nums[m]==target) return m
        if(nums[m]>target) {
            r=m-1
        }
        else{
            l=m+1
        }
    }
    return -1
};

// time complexity: O(log n) in all cases (worst, average, and best) because it divides the search space in half with each iteration.
// space complexity: O(1) - it uses a constant amount of space regardless of the input size.