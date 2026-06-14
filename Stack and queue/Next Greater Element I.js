/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, arr) {
    let ngemap={}
    let stack=[]
    let n=arr.length

    stack.push(arr[n-1])
    ngemap[arr[n-1]]=-1
    for(let i=n-2;i>=0;i--){
        while(stack.length){
            if(stack[stack.length-1]<arr[i]){
                stack.pop()
            }
            else{
                ngemap[arr[i]]=stack[stack.length-1]
                break;
            }
        }
        if(stack.length==0){
            ngemap[arr[i]]=-1
        }
        stack.push(arr[i])
    }
    let ans = [];
    for(let i=0; i < nums1.length; i++){
        ans.push(ngemap[nums1[i]]);
    }
    return ans;
};

//time complexity: O(n)
//space complexity: O(n)