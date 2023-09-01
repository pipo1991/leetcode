/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var l = 0;
    var r = height.length - 1;
    var max = 0;
    while (l < r) {
        var area = Math.min(height[l], height[r]) * (r - l);
        if (max < area) {
            max = area;
        }
        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }
    }
    return max;
};
