// Bubble Sort - A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The process is repeated until the list is sorted.

function bubbleSort(arr) {
    let n = arr.length;
    let isswapped=false
    for (let i = 0; i < n - 1; i++) {
        // isswapped=false
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isswapped=true
            }
        }
        if(!isswapped) break
    }
    return arr;
}

console.log(bubbleSort([5, 2, 0, 3, 6, 7]));