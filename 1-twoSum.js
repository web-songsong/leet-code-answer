let nums = [2, 7, 11, 15], target = 9
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
console.log(twoSum(nums, target))