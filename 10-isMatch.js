/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {

  function match(ins, inp) {
    if (inp === -1) return (ins === -1)
    if (p[inp] === '*') {
      if (ins > -1 && (p[inp - 1] === s[ins] || p[inp - 1] === '.')) {
        if (match(ins - 1, inp)) return true
      }
      return match(ins - 1, inp - 2)
    }
    if (ins > -1 && (p[inp] === s[ins] || p[inp] === '.')) return match(ins - 1, inp - 1)
    return false
  }

  return match(s.length - 1, p.length - 1)

}
s = "mississippi"
p = "mis*is*p*."
console.log(isMatch(s, p))