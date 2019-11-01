/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let [a, b] = [0, height.length - 1]
  let h,
    w,
    max = 0,
    varible

  while (a < b) {
    w = b - a
    h = height[a] > height[b] ? height[b] : height[a]
    varible = w * h
    max = varible > max ? varible : max
    height[a] > height[b] ? b-- : a++
  }
  return max
};