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


let arr = [];
function multiply2Max(a) {
  return function(b) {
      return function(c) {
          arr = [a, b, c];
          arr.sort((a, b) => a - b);
          for (let elem of arr) {
            if (elem % 2 === 0) {
              return elem;
            }
          }
          return arr;
      };
  };
}

console.log(multiply2Max(1)(2)(3)); // 2
console.log(multiply2Max(4)(4)(1)); // 4
console.log(multiply2Max(3)(0)(5)); // 0