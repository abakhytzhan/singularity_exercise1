function uniqueChar(str) {
    str = str.toLowerCase();
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
        if (result.indexOf(str.charAt(i)) < 0) {
            result += str.charAt(i);
        }
    }
    return result;
}

console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog")); // thequickbrownfxjmpsvlazydg





