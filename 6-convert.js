s = 'abcdefg'
numRows = 3

function convert(s, numRows) {
  if (numRows < 2) return s
  let list_item = []
  let flag = -1
  let num = 0
  for (let i = 0; i < numRows; i++) {
    list_item[i] = ''
  }

  for (let i = 0; i < s.length; i++) {
    if (num === 0 || num === numRows - 1) flag = -flag

    list_item[num] += s[i]
    num += flag
  }
  return list_item.join('')
}

console.log(convert(s, numRows))
