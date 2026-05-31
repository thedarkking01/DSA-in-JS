// Linear Search Algorithm
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the target element is not found
}
let arr = [5, 2, 0, 3, 6, 7];
let target = 3;
let result = linearSearch(arr, target);
console.log(result);

// time complexity: O(n) in the worst case (when the target element is not found or is at the end of the array), O(1) in the best case (when the target element is at the beginning of the array)
// space complexity: O(1) - it uses a constant amount of space regardless of the input size.