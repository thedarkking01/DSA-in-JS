// Given an array of numbers, find the sum of all odd numbers in the array using recursion.
function sumodd(n) {
    let isodd=(nums[n]%2!=0)
    if (n == 0) return isodd?nums[n]:0;
    return ((isodd?nums[n]:0)+sumodd(n-1))
}
let nums = [5, 2, 0, 3, 6, 7]
console.log(sumodd(nums.length-1))