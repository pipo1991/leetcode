/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => (a - b));
    
    var output = [];
    for (var i = 0 ; i < nums.length ; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        var low = i + 1;
        var high = nums.length - 1;
        while (low < high) {
            if (nums[i] + nums[low] + nums[high] > 0) {
                high--;
            } else if (nums[i] + nums[low] + nums[high] < 0) {
                low++;
            } else {
                while (low < nums.length - 1 && nums[low] == nums[low + 1]) {
                    low++;
                }
                while (high > 0 && nums[high] == nums[high - 1]) {
                    high--;
                }
                output.push([nums[i], nums[low], nums[high]]);
                low++;
                high--;
            }
        }
    }
    return output;
};
