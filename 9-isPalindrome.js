/**
 * @param {number} x
 * @return {boolean}
 */

let str = 1212
var isPalindrome = function (x) {
  x = x.toString()
  let len = x.length
  for (let i = 0; i < len; i++) {
    if (x[i] === x[len - 1 - i]) continue
    return false
  }
  return true
}

console.log(isPalindrome(str))

