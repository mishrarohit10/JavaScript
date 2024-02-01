//------------------------------------------------------Var-----------------------------------------------------------------

// var is function scoped

function Var() {
    if (true) {
        var name = "this is var";
    }
    console.log(name);
}

// if var is outside fn it is global variable

if (true) {
    var name2 = "this is global var";
}

console.log(name2);

// --------------------------------------------------------Let/Const----------------------------------------------------------

// let and const are block scoped 

if (true) {
    let name3 = "this is let";
}
console.log(name3);  // Uncaught ReferenceError: name is not defined

// Yes, an uncaught ReferenceError will stop the execution of JavaScript code.

if (true) {
    let name4 = "this is let";
    console.log(name4); // prints this is let
}

// var is hoisted, which means they are available to use before defined

console.log(name5);
// undefined

var name5 = "bruce";
console.log(name5);
// bruce

// not for let/const

console.log(name6);
 // uncaught reference error: name6 is not defined

let name6 = "wayne";
console.log(name6);

// variable can be redeclared using var, but let with throw an error

var surname = "wayne";
console.log(surname);

var surname = "uchiha";
console.log(surname);

// using let/const will throw an error