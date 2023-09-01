/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var sp = new Array(s.length + 1).fill().map(() => new Array(p.length + 1).fill(false));
    sp[0][0] = true;
    for (var j = 1; j < p.length + 1; j++) {
        if (p[j - 1] == '*') {
            sp[0][j] = sp[0][j - 2];
        }
    }
    for (var i = 1 ; i < s.length + 1 ; i++) {
        for (var j = 1 ; j < p.length + 1 ; j++) {
            if (s[i - 1] == p[j - 1] || p[j - 1] == '.') {
                sp[i][j] = sp[i - 1][j - 1];
            } else if (p[j - 1] == '*') {
                if (p[j - 2] == s[i - 1] || p[j - 2] == '.' ) {
                    sp[i][j] = sp[i][j - 2] || sp[i - 1][j];
                } else {
                    sp[i][j] = sp[i][j - 2];
                }
            }
        }
    }
    return sp[s.length][p.length];
};
