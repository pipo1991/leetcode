/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    var isFirst = true;
    var number = 0;
    var isNeg = false;
    for (const c of s) {
        if (isFirst && c.charCodeAt(0) == ' '.charCodeAt(0)){
            continue;
        } else if (isFirst && c.charCodeAt(0) == '-'.charCodeAt(0)){
            isNeg = true;
            isFirst = false;
        } else if (isFirst && c.charCodeAt(0) == '+'.charCodeAt(0)){
            isFirst = false;
        } else if (c.charCodeAt(0) >= '0'.charCodeAt(0) 
         && c.charCodeAt(0) <= '9'.charCodeAt(0)) {
            number = number * 10 + parseInt(c);
            isFirst = false;
        } else {
            break;
        }
    }
    if (isNeg) {
        number *= -1;
        return Math.max(- Math.pow(2, 31), number);
    }
    return Math.min(Math.pow(2, 31) - 1, number);
};
