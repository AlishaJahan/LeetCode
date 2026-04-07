//======================== optimal logic ===========================
function arrConcatination(nums){
    return [...nums,...nums]
}

//======================== Bad logic ==========================

// const nums = [1, 2, 1];

// function arrConcatination(nums){
//     const duplicateNums = [];
//     for (let i = 0; i < nums.length; i++) {
//         duplicateNums.push(nums[i])
//     }
//     const ans = [...nums, ...duplicateNums];
//     return ans;
// }
// console.log(arrConcatination(nums));