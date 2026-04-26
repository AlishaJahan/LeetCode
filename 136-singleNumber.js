const nums = [1, 2, 2];

function singleNumber(nums) {
    let i = 0;
    for (const num of nums) {
        i = i ^ num;
    }
    return i;
}
console.log(singleNumber(nums));

/*
[4,1,2,1,2]
let i =0;

0^4 = 4
4^1 = 5
5^2 = 7
7^1 = 6 
6^2 = 4
*/