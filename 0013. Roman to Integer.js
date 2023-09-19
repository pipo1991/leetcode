/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romans = {'M' :1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};
    var num = romans[s[0]];
    var lastRoman = s[0];
    var index = 1;
    while (index < s.length) {
        var currentRoman = s[index];
        num += romans[currentRoman];
        if (romans[lastRoman] < romans[currentRoman]) {
            num -= 2 * romans[lastRoman];
        }
        lastRoman = currentRoman;
        index++;
    }
    return num;
};
