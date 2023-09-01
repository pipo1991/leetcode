/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var str = [];
    if (x < 0) {
        x = Math.abs(x);
        str.push("-");
    }
    while (x > 0) {
        str.push(x % 10);
        x = parseInt( x / 10);
    }
    str = str.join('');
    if (parseInt(str) > Math.pow(2, 31) - 1 || parseInt(str) < - Math.pow(2, 31)) {
        return 0;
    }
    return str;
};
