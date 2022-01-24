//var  - variable 
//variables declared with var dont have block scope - global variable
var x = 2;
//similar to writing globalThis.x = 2;
//legal to declare the same variable multiple times using var 
//hoisting: a variable declare dwith var is lifted up to the top of the enclosing function
//hoisting is corrected with let

//Destructring Assignment
//one or more values are extracted/destructured from the value on the right and stored into the variables named on the left. 
let [x,y] = [1, 2]; //same as let x = 1, y = 2;
[x, y] = [y, x]; //swap values of the two variables
//easy to work with functions that return arrays of values
//using destructuring assignment in loops
let o = {x : 1, y: 2};
for (const [name, value] of Object.entries(o)){
    console.log(name, value); //prints "x 1" "y 2"
}
//number of variables on the left doesn't have to match the number of array elements on the right
//the extra variables are set as undefined
let [a, b] = [1]; //a = 1; b = undefined;
//to collect remaining or unused variables use (...)
let [c, ...d] = [1, 2, 3, 4]; //c = 1; d = [2, 3, 4];
//destructuring works with any iterable object such as a string
const { sin, cos, tan} = Math; //sin = Math.sin, cos = Math.cos, tan = Math.tan
//Math has properties sin,cos,tan. if the names weren't properties of Math, it would be assigned undefined

//Expressions and Operators
//an expression is a phrase of js that can be evaluated to produce a value
//complex expressions are built from simple ones
//an operator combines the values of its operands insome way and evaluated a new value

//Primary expressions
//stand alone, do not include any simpler expressions
//constant or literal values

// 1.23 //a number literal
// "hello" //a string literal
// /pattern/ //a regExp pattern

// true //boolean true
// false //boolean false
// null //null value
// this //current object //object oriented programming

// x //value of the variable x
//when an identifier appears by itself in a program, js assumes it is a variable or contant or property of the global object

//Object and Array Initializers
//expressions whose value is a newly created object or array
//also called object literals and array literals
//array initializers - square brackets comma separated list of expressions
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//object initalizers - curly brackets with each subexpression expressed by property name and colon
let p = { x: 1, y: 2};

