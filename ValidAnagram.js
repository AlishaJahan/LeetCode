//=============================== optimal solution =================================
const str1 = "racecar";
const str2 = "carrace";

const isAnagram = function (str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const map = {};
  for (let str of str1) {
    map[str] = (map[str] || 0) + 1; //{ r: 2, a: 2, c: 2, e: 1 }
    
  }

  for (let str of str2) {
    if (!map[str]) {
      return false;
    }
    map[str]--;
  }
  return true;
}
console.log(isAnagram(str1, str2));

//=========================== bad logic =============================

// const str1 = "racecar";
// const str2 = "carrace";

// function isAnagram(str1, str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     const sorted1 = str1.split("").sort().join(" ");
//     const sorted2 = str2.split("").sort().join(" ");
//     if(sorted1 === sorted2){
//         return true
//     }
//     return false;
// }
// console.log(isAnagram(str1,str2));