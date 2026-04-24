const nums =[1,1,2];

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let i = 0;    //1

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
console.log(removeDuplicates(nums));
