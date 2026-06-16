/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let m = Math.floor((l + r) / 2);

        // pair exists on left side
        if (m > 0 && nums[m] == nums[m - 1]) {
            let leftcount = (m - 1) - l;

            if (leftcount % 2 == 1) {
                r = m - 2;
            } else {
                l = m + 1;
            }
        }
        // pair exists on right side
        else if (m < nums.length - 1 && nums[m] == nums[m + 1]) {
            let leftcount = m - l;

            if (leftcount % 2 == 1) {
                r = m - 1;
            } else {
                l = m + 2;
            }
        }
        // single element found
        else {
            return nums[m];
        }
    }
    return nums[l];
};
