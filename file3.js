function isPalindrome(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("loki")); // false
console.log(isPalindrome("aba")); // true
console.log(isPalindrome("abab")); // false
console.log(isPalindrome("Qazaq")); // true