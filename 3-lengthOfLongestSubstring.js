/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let x1 = 0
  let x2 = 0
  let len = 0
  let str = ''
  for (let i = 0; i < s.length; i++) {
    x1 += str.includes(s[i]) ? str.indexOf(s[i]) + 1 : 0
    x2++
    let str_test = s.slice(x1, x2)
    str = str_test
    if (str_test.length > len) {
      len = str_test.length
    }
  }
  console.log(str);
  return len
};

console.log(lengthOfLongestSubstring("jbpnbwwd"));
