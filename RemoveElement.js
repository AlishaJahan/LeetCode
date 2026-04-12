const nums = [3,2,2,3];
const val = 2;

//============================== Removing element count ================================
function removeElement(nums, val) {
    let k = 0; 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
console.log(removeElement(nums, val));

//========================== Array after removing element ==============================

// function removeElement(nums, val) {
//     const num = nums.filter((value) => {
//         return value !== val;
//     })
//     return num
// }
// console.log(removeElement(nums, val));