function multiply2Max(a) {
    return function(b) {
        return function(c) {
            if (a >= b && a >= c) {
                return b * c;
            } else if (b >= a && b >= c) {
                return a * c;
            } else {
                return a * b;
            }
        };
    };
}

console.log(multiply2Max(1)(2)(3)); // 2
console.log(multiply2Max(4)(4)(1)); // 4
console.log(multiply2Max(3)(0)(5)); // 0