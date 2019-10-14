/**
 * @param {string} str
 * @return {number}
 */
let str = "words and 987"
var myAtoi = function (str) {
  if (!str.length) return 0
  const periphery = 2 ** 31
  const INT_MAX = periphery - 1
  const INT_MIN = -periphery
  let str_new = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue
    str_new = str.slice(i)
    break
  }
  reg = /^[\+|-]?\d+/g
  let num = str_new.match(reg) && parseFloat(str_new.match(reg)[0])
  num > INT_MAX && (num = INT_MAX)
  num < INT_MIN && (num = INT_MIN)
  Number.isNaN(num) && (num = 0)
  return num || 0

}

console.log(myAtoi(str))  