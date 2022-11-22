function minAndMax2(arr) {
    arr.sort((a, b) => a - b);
    return [arr[1], arr[arr.length - 2]];
}

console.log(minAndMax2([17, 5, 10, 2, 20, 12, 11, 16, 14, 9])); // [5, 17]
console.log(minAndMax2([6, 7, 16, 11, 12, 10, 9, 4, 1, 15])); // [4, 15]