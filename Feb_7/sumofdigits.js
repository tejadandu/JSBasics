// Given number n, calculate the sum of digits of number n.

function sumofdigits(n){
    let sum = 0;
    while (n > 0){
        let lastDigit = n % 10;
        sum += lastDigit;
        n = Math.floor(n/10);
    }
    return sum;
}

console.log(sumofdigits(1234));
console.log(sumofdigits(123456));
