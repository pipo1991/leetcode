/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => (a - b));
    
    var sumMin = 100000;
    for (var i = 0 ; i < nums.length ; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        var low = i + 1;
        var high = nums.length - 1;
        while (low < high) {
            var sum = nums[i] + nums[low] + nums[high];
            if (sum - target > 0) {
                high--;
            } else if (sum - target < 0) {
                low++;
            } else {
                return target;
            }
            if (Math.abs(sum - target) < Math.abs(sumMin - target)) {
                sumMin = sum;
            }
        }
    }
    return sumMin;
};
