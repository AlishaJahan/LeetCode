function plusOne(digits) {    //[0,0,0]
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
// if all are 9 [9,9,9]
    digits.unshift(1);
    return digits;
};

