const student = {
        id: 25,
        name : "David Rayy",
        class : 12,
     };
    
    function getProperties(obj) {
        return Object.keys(obj);
    }
    
    console.log(getProperties(student)); 
    // ["id", "name", "class"]

    // let arr = [];
        // for (let key in obj) {
        //     arr.push(key);
        // }
        // return arr;