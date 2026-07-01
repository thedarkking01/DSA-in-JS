let arr=[4,5,3,2,1]

function heapSort(arr){
    let n=arr.length
    // create max heap
    for(let i=(Math.floor(n/2)-1);i>=0;i--){  // n/2-1 is the index of the last non-leaf node
        heapifyDown(arr,i,n)
    }


    // sort the array
    for(let i=n-1;i>=0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapifyDown(arr, 0, i)
    }
}

function heapifyDown(arr,i,n){
    let left=2*i+1
    let right=2*i+2
    let largest=i

    if(left<n && arr[left]>arr[largest]){
        largest=left
    }
    if(right<n && arr[right]>arr[largest]){
        largest=right
    }
    if(largest!==i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapifyDown(arr,largest,n)
    }
}

console.log("Before sorting: ",arr)
heapSort(arr)
console.log("After sorting: ",arr)

// time complexity: O(nlogn)
// space complexity: O(1)