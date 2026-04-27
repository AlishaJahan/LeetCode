const nums = [3, 0, 1];

function missingNumber(nums) {
  let n = nums.length;
  let TotalSum = n * (n + 1) / 2;
  let actualSum = 0;

  for (let i of nums) {
    actualSum += i;
  }
  return TotalSum - actualSum;
}
console.log(missingNumber(nums));