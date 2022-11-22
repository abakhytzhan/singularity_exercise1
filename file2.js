function reverse(number) {
    return parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
}

console.log(reverse(32234));