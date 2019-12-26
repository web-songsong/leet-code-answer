let nums = [1, -1, -1, 0]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const TARGET_NUM = 0
  let start, end
  let result = []

  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > TARGET_NUM) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    start = i + 1
    end = nums.length - 1
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end]
      if (sum === TARGET_NUM) {
        result.push(([nums[i], nums[start], nums[end]]))
        while (start < end && nums[start] === nums[++start]) {
        }
        while (start < end && nums[end] === nums[--end]) {
        }
      } else if (sum < TARGET_NUM) {
        start++
      } else if (sum > TARGET_NUM) end--
    }
  }
  return result
}

console.log(threeSum(nums))
