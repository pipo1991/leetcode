/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    var output = [];
    combinations(digits, map, "", output);
    return output;
};

function combinations(digits, map, pre, output) {
    if (digits.length == 0) {
        return;
    }
    if (pre.length == digits.length) {
        output.push(pre);
        return;
    }
    var letters = map[digits[pre.length]];
    for (const letter of letters) {
        combinations(digits, map, pre + letter, output);
    }
}
