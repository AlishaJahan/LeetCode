const nums = [0,1,2,0,3,5,9]; //i = 0, j= 0

function movingZeroes(nums){
    let i = 0;
    for(let j =0 ;j <nums.length;j++){
        if (nums[j] !== 0){
            [nums[i],nums[j]] = [nums[j],nums[i]];
            i++ ;
        }
    }
    return nums;
}
console.log(movingZeroes(nums));