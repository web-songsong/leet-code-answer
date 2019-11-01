/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let ans = strs[0] || ''
  for (let i = 1; i < strs.length; i++) {
    let len = ans.length > strs[i].length ? strs[i].length : ans.length
    for (let j = 0; j <= len; j++) {
      if (!(ans[j] === strs[i][j])) {
        
        ans = ans.slice(0, j)
      }
    }
  }
  return ans
}

console.log(longestCommonPrefix(["aa","a"]))