/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var n = nums.length;
    var hash = {};
    for (var i = 0; i < n; i++) {
        hash[nums[i]] = i;
    }

    for (var i = 0; i < n; i++) {
        var diff = target - nums[i];
        if (hash[diff]) {
            var index = hash[diff];
            if (index != i) {
                return [i, index];
            }
        }
    }
    return [];
};
