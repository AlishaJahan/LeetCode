const arr = [3, 7, 5, 1, 0];
const target = 10;

// ======================== first approach======================

// function twoSum(arr, target) {
//     for (let i = 0; i <= arr.length - 2; i++) {
//         for (let j = i + 1; j <= arr.length - 1; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
//     return []
// }

// console.log(twoSum(arr, target));

//====================== optimal approach using hash map========================

function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const complement = target - current;
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(current, i);
  }
  return [];
}

console.log(twoSum(arr, target));