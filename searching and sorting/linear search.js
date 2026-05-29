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