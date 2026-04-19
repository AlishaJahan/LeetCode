const num1 = "2";
const num2 = "3";

function multiplyString(num1,num2){
    return String(BigInt(num1)*BigInt(num2));
}
console.log(multiplyString(num1,num2));