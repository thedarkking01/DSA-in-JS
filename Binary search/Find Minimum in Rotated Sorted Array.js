/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(arr) {
    let l=0
    let r=arr.length-1
    
    while(l<=r){
        let m=Math.floor((l+r)/2)
        //sorted case
        if(arr[l]<=arr[r]){
            return arr[l]
        }
        if(arr[m]<arr[m-1]){
            return arr[m]
        }
        //if left half is non sorted
        if(arr[l]>arr[m]){
            r=m-1
        }else{
            l=m+1
        }
    }
    return arr[r]
};