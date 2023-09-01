/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var max = {
        count: 0,
        value: ""
    };
    for (var i = 0 ; i < s.length ; i++) {
        paliProp(s, i, i, max);
        paliProp(s, i, i+1, max);
    }
    return max.value;
};

function paliProp(str, l, r, max) {
    while ( l > -1 && r < str.length && str[l] == str[r]) {
        var count = r - l + 1;
        if (count > max.count) {
            max.count = count;
            max.value = str.substring(l, r + 1);
        }
        l--;
        r++;
    }
}
