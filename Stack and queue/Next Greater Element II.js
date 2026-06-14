/**
 * @param {number[]} nums
 * @return {number[]}
 */

// approach 1 : by doubling the array and using stack to find next greater element
var nextGreaterElements = function(nums) {
    let arr=[...nums,...nums]
    let n=arr.length
    let stack=[]
    let ans=new Array(n).fill(-1)
    stack.push(arr[n-1])
    for(let i=n-2;i>=0;i--){
        while(stack.length){
            let top=stack[stack.length-1]
            if(top<=arr[i]){
                stack.pop()
            }
            else{
                ans[i]=top
                break
            }
        }
        if(stack.length==0){
            ans[i]=-1
        }
        stack.push(arr[i])
    }
    return ans.slice(0,n/2)
};

// time complexity: O(n)
// space complexity: O(n)

// approach 2 : by using modules of index by size of arr

var nextGreaterElements = function(arr) {
    // modules of index by size of arr
    let n=arr.length
    let stack=[]
    let ans=new Array(n).fill(-1)
    stack.push(arr[n-1])
    for(let i=2*n-2;i>=0;i--){
        while(stack.length){
            let top=stack[stack.length-1]
            if(top<=arr[i%n]){
                stack.pop()
            }
            else{
                ans[i%n]=top
                break
            }
        }
        if(stack.length==0){
            ans[i%n]=-1
        }
        stack.push(arr[i%n])
    }
    return ans.slice(0,n)
};
// time complexity: O(n)
// space complexity: O(n)