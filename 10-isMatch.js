/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
s = "aaaaaaaaaa"
p = "a*b"
var isMatch = function (s, p) {
  if (p === '.*') return true
  let wildcard = ''
  let symbolNum = ''
  let lenS = s.length
  let lenP = p.length
  let params_strP
  if (p === '') {
    if (s === '') {
      return true
    }
    return false
  }
  if (lenP > lenS) return false
  for (let i = 0; i < lenS; i++) {
    if (symbolNum === '*' && s[i] === wildcard) {
      params_strP = s[i]
    } else {
      params_strP = p[i]
    }
    if (test_p({strP: params_strP, strS: s[i]})) continue
    return false
  }
  return true

  function test_p({strP, strS}) {
    switch (strP) {
      case '.':
        wildcard = '.'
        return true
      case '*':
        symbolNum = '*'
        if (wildcard === '.') {
          return true
        } else {
          return wildcard === strS
        }
      default:
        wildcard = strP
        return strP === strS

    }

  }
}
console.log(isMatch(s, p))