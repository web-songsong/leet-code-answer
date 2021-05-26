/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 const twoSum = function (nums, target) {
  let is_exists = {}
  for (let i = 0; i < nums.length; i++) {
    if (is_exists[nums[i]] > -1) {
      return [is_exists[nums[i]], i]
    } else {
      is_exists[target - nums[i]] = i
    }
  }

}
