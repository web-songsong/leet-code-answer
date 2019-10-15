/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
s = "aaaaaaaaaabbbbb"
p = ".*"
var isMatch = function (s, p) {

  let index = 0

  const reg = /(\w|.)(\*)*/g

  // let ident, flag = false

  let reg_info = reg.exec(p)

  function info_format() {
    
    if (!reg_info) return true
    
    
    ident = reg_info[0]
    flag = reg_info.length > 2
    
    if (flag){}
  }

  while (index === s.length - 1) {
    if (!info_format(s[index])) {
      return false
    }
  }
  return true
}
// console.log(isMatch(s, p))

a = "aab"
b = "c*a*b"
console.log(isMatch(a, b))