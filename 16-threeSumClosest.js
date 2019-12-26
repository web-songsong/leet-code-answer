let nums = [0, 2, 1, -3]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  const TARGET_NUM = target
  let offset = Infinity, tarNum, tar, sum, start, end, result = []
  nums.sort((a, b) => a - b)
  console.log(nums)
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    start = i + 1
    end = nums.length - 1
    while (start < end) {
      sum = nums[i] + nums[start] + nums[end]
      tar = sum - TARGET_NUM
      tarNum = Math.abs(tar)
      console.log(`tarNum: ${tarNum}  i: ${i}`)
      // console.log('----', nums[i], nums[start], nums[end])
      if (tarNum <= offset) {
        offset = tarNum
        result = [nums[i], nums[start], nums[end]]
        if (offset === 0) return result.reduce((a, b) => (a + b))
      }
      if (tar > 0) end--
      if (tar < 0) start++
    }
  }
  return result.reduce((a, b) => (a + b))
}

console.log(threeSumClosest(nums, 1))
