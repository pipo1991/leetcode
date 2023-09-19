/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort((a,b) => a < b ? -1 : ( a > b ? 1 : 0));

    var first = strs[0];
    var last = strs[strs.length - 1];
    var i = 0;
    var smallestLength = Math.min(first.length, last.length);

    while ( i < smallestLength) {
        if (first[i] != last[i]) {
            break;
        }
        i++;
    }

    return first.slice(0, i);
};
