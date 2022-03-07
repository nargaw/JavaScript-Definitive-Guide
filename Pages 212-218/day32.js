//toString() Method
//all js objects. fucntion have toString() method

//Function() constructor
const f = new Function("x", "y", "return x * y;");
//accepts any number of string arguments
//last argument is the text of the function body
//function is dynamically created and complited at runtime
//inefficient if called within a loop
//no lexical scoping, complied as top-level functions

//FUNCTIONAL PROGRAMING

//processing arrays with functions
//define two simple functions
const sum = (x, y) => x + y;
const square = x => x * x;
//use functions with array methods
let data = [1, 1, 3, 5, 5];
