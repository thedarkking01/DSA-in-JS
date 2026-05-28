// Write a recursive function to find the sum of all elements in an array.
function sum(n) {
    if (n==0) return nums[0];
    return nums[n] + sum(n-1)
}
let nums = [5, 3, 2, 0, 1]
console.log(sum(nums.length-1))