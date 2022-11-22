const student = {
        id: 25,
        name : "David Rayy",
        class : 12,
     };
    
    function getProperties(student) {
        return [student.id, student.name, student.class];
    }
    
    console.log(getProperties(student)); 
    // ["id", "name", "class"]