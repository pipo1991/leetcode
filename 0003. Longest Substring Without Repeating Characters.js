/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var chars = {};
    var j = 0;
    for (var i = 0 ; i < s.length ; i++) {
        if (chars[s[i]]) {
            while (s[j] != s[i]) {
                delete chars[s[j]];
                j++;
            }
            j++;
        } else {
            chars[s[i]] = true;
            var lenStr = Object.keys(chars).length;
            if (lenStr > max) {
                max = lenStr;
            }
        }
    }
    return max;
};
