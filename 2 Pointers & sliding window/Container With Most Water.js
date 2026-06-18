/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i=0
    let j=height.length-1
    let maxwater=0
    while(i<j){
        let area=(j-i)*Math.min(height[i],height[j])
        maxwater=Math.max(area,maxwater)
        if(height[i]<height[j]){
            i++
        }else{
            j--
        }
    }
    return maxwater
};