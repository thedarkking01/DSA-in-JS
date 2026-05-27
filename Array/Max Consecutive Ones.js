/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let crrcount=0;
    let maxcount=0;
    for(let i=0;i<nums.length;i++){
       if(nums[i]===1){
        crrcount=crrcount+1
        maxcount = Math.max(maxcount, crrcount)
       }
       else{
        crrcount=0
       }
    }
    return Math.max(maxcount,crrcount)
};