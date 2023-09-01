/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x + "";
    const n = str.length;
    for (var i = 0 ; i < Math.floor(n / 2) ; i++) {
        if (str[i] != str[n-i-1]) {
            return false;
        }
    }
    return true;
};
