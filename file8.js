function charCounts(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            if (obj[str[i]]) {
            obj[str[i]] = obj[str[i]] + 1;
            } else {
                obj[str[i]] = 1;
            }
        }  
    }
    return obj;
}

console.log(charCounts("The quick brown fox jumps over the lazy dog"));

// {"t":1,"h":2,"e":3,"q":1,"u":2,"i":1,"c":1,"k":1,"b":1,"r":2,"o":4,"w":1,"n":1,"f":1,"x":1,"j":1,"m":1,"p":1,"s":1,"v":1,"t":1,"l":1,"a":1,"z":1,"y":1,"d":1,"g":1}

// function charCounts(str) {
//     let map = new Map();
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] != " ") {
//             if (map.has(str[i])) {
//                 map.set(str[i], map.get(str[i]) + 1);
//             } else {
//                 map.set(str[i], 1);
//             }
//         }
//     }
//     return map;
// }

// console.log(charCounts("The quick brown fox jumps over the lazy dog")); 



 