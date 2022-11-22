function minAndMax(arr) {
    arr.sort((a, b) => a - b);
    return [arr[0], arr[arr.length - 1]];
}

console.log(minAndMax([17, 5, 10, 2, 20, 12, 11, 16, 14, 9])); // [2, 20]
console.log(minAndMax([6, 7, 16, 11, 12, 10, 9, 4, 1, 15])); // [1, 16]