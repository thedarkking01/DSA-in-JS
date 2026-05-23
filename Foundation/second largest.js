// find the second largest number in an array

function findSecondLargestNumber(arr) {
    let fisrtLargest = -Infinity;
    let secondLargest = -Infinity;
    if (arr.length < 2) {
        return null; // Not enough elements to find the second largest
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > fisrtLargest) {
            secondLargest = fisrtLargest;
            fisrtLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < fisrtLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
const arr = [2, 9, 17, 0, 1, 10, 4, 8,10];
const secondLargestNumber = findSecondLargestNumber(arr);
console.log(secondLargestNumber);