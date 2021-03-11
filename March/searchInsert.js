//Given a sorted array of distinct integers and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

var searchInsert = function(nums, target) {
    let pos = -1
    
    for (let i =0; i<nums.length; i++){ 
      //console.log(pos)
      pos = pos + 1
  if(nums[i] > target){
     return pos
    } else if (nums[i] == target){
      return pos
    } else if (target > nums[nums.length -1]){
   return nums.length 
    }
  };
  }
      console.log(searchInsert([1,3,5,6],7))