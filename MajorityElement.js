const nums = [5, 5, 1, 1, 1, 5, 5];

function majorityElement(nums) {
    let map = {};                 // Empty object
    const n = nums.length;        // Array length [7]

    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;            // { '1': 3, '5': 4 }
        if (map[num] > Math.floor(n / 2)) {
            return num;
        }
    }
    return -1;
}
console.log(majorityElement(nums));

