/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  let numMap = {
    2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz',
  }
  let result = []
  let digitsLen = digits.length
  if (!digitsLen) return []
  const initStr = (str, s = '') => {
    let j = 0
    while (j < str.length) {
      let text = s + str[j++]
      if (text.length === digitsLen) {
        result.push(text)
      } else {
        initStr(numMap[digits[text.length]], text)
      }
    }
  }
  initStr(numMap[digits[0]])
  return result
}

console.log(letterCombinations(''))
