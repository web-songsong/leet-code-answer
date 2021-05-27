/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
   let arr = nums1.concat(nums2)
   arr.sort((a,b)=>a-b)
    let z = arr.length
    if(z&1){
      return arr[~~(z/2)]
    }else{
      return ((arr[z/2-1])+arr[z/2])/2
    }
};

console.log(findMedianSortedArrays([1,2],[3,4]));
