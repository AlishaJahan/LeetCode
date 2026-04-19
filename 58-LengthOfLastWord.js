//===================== MOST OPTIMUM ===================
function lengthOfLastWord(str) {
    let i = str.length - 1; 
    let length = 0;

    while (i >= 0 && str[i] === ' ') {
        i--;
    }

    while (i >= 0 && str[i] !== ' ') {
        length++;
        i--;
    }
    return length;
}

console.log(lengthOfLastWord("Hello World"));

// =================== AVERAGE ======================
// const str = "         Hello    World        ";

// function lengthOfLastWord(str){
//     return str.trim().split(' ').pop().length;
// }
// console.log(lengthOfLastWord(str));



//================== NOT OPTIMUM ======================
// const str = "         Hello    World        ";

// function lengthOfLastWord(str){
//     const s = str.trim().split(' ')
//     const lastElem = s[s.length-1].length;
//     return lastElem;
// }
// console.log(lengthOfLastWord(str));

