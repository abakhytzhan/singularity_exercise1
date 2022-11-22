function Gandalf() {
    console.log("You shall not pass!")
 }

function call(num, func) {
    for (let i = 0; i < num; i++) {
        func();
    }
}

 call(3, Gandalf);
 // You shall not pass!
 // You shall not pass!
 // You shall not pass!
 
 call(3, function run() {
    console.log("Fly, you fools!");
 });
 // Fly, you fools!