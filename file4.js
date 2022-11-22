function uppercaseEachWord(str) {
    if (!str) {
        return str;
    }
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}

console.log(uppercaseEachWord("the quick brown fox"));