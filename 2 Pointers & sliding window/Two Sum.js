/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let map={}
    for(let i=0;i<arr.length;i++){
        map[arr[i]]=i
    }

    for(let i=0;i<arr.length;i++){
        let diff=target-arr[i]
        if(map[diff]&&map[diff]!=i){
            return [i,map[diff]]
        }
    }
};
// time complexity: O(n)
// space complexity: O(n)