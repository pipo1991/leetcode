/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => (a - b));
    
    var output = [];
    for (var i = 0 ; i < nums.length ; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (var j = i+1 ; j < nums.length ; j++) {
            if (j > i+1 && nums[j] == nums[j - 1]) {
                continue;
            }
            var low = j + 1;
            var high = nums.length - 1;
            while (low < high) {
                if (nums[i] + nums[j] + nums[low] + nums[high] > target) {
                    high--;
                } else if (nums[i] + nums[j] + nums[low] + nums[high] < target) {
                    low++;
                } else {
                    while (low < nums.length - 1 && nums[low] == nums[low + 1]) {
                        low++;
                    }
                    while (high > 0 && nums[high] == nums[high - 1]) {
                        high--;
                    }
                    output.push([nums[i], nums[j], nums[low], nums[high]]);
                    low++;
                    high--;
                }
            }
        }
    }
    return output;
};
