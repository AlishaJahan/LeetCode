//=========================== average solution ============================
const strs = ["bat", "bag", "bank", "band"];

function longestCommonPrefix(strs) {
  let prefix = '';
  for (let i = 0; i < strs[0].length; i++) {
    let ch = strs[0][i];               //b
    
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== ch) {
        return prefix;
      }
    }
    prefix += ch;
  }
  return prefix;
}

console.log(longestCommonPrefix(strs));

//========================== Average case ==============================

// function longestCommonPrefix(strs) {
//   if (strs.length === 0) return "";

//   let prefix = strs[0];

//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, prefix.length - 1);
//       if (prefix === "") return "";
//     }
//   }
//   return prefix;
// }
// console.log(longestCommonPrefix(strs));