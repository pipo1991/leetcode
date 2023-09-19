/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    var currentChar = 0;
    var value = num;
    var str = "";
    while (value > 0) {
        var rem5 = value % 5;
        var rem10 = value % 10;
        if (rem5 % 5 == 4) {
            if (rem10 > 5) {
                str = romans[currentChar] + romans[currentChar + 2] + str;
            } else {
                str = romans[currentChar] + romans[currentChar + 1] + str;
            }
        } else {
            for (var i = 0 ; i < rem5; i++) {
                str = romans[currentChar] + str;
            }
            if (rem10 > 4) {
                str = romans[currentChar + 1] + str;
            } 
        } 
        value = parseInt(value / 10);
        currentChar+=2;
    }
    return str;
};
