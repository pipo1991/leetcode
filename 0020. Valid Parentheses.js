/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for (var c of s) {
        if (c == '(' || c == '[' || c == '{') {
            stack.push(c);
        } else {
            if (stack.length == 0) {
                return false;
            }
            var currentStack = stack.pop();
            if (currentStack == '(' && c != ')') {
                return false;
            } else if (currentStack == '[' && c != ']') {
                return false;
            } else if (currentStack == '{' && c != '}') {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};
