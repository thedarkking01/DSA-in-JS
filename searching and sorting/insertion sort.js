// Insertion Sort Algorithm - A simple sorting algorithm that builds the sorted array one item at a time by repeatedly taking the next item and inserting it into the correct position in the already sorted part of the array.
function insertionSort(arr) {
    let n = arr.length; 
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
    }

// time complexity: O(n^2) in the worst case, O(n) in the best case (when the array is already sorted)
// space complexity: O(1) - it is an in-place sorting algorithm, meaning it does not require additional space for another array.