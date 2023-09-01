/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var arr = new Array(numRows).fill("");;
    var col = 0;
    var dir = "down";
    for (const c of s) {
        arr[col] += c;
        if (col == numRows - 1) {
            dir = "up";
        } else if (col == 0) {
            dir = "down";
        }
        if (dir == "down") {
            col++;
        } else {
            if (col > 0) {
                col--;
            }
        }
    }
    return arr.join('');
};
