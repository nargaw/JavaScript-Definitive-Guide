//Function - fundamental building block for js programs
/**
 * a block of js code that is defined once but may be executed or invoked any number of times.
 * parameters - local variables for the body of the function
 * function invocations provide values (arguments) for the function's parameters
 * each invocation has another value -the invocation context - 'this' keyword
 * function assigned to a property of an object - method of the object
 * object invocation context 'this' value 
 * functions designed to initialize a newly created object are constructors
 * function definitions can be nested within other functions, have access to any variables that are in scope where they are defined - closures
 */

//Defining Functions
//'function' keyword
//ES6 arrow function

//Function Declarations
//an identifier that names the function is required for declaration
//pair of parentheses around a comma-separated list of zero or more identifiers (local variables)
//pair of curly braces with zero or more js statements inside

function printprops(o){
    for (let p in o){
        console.log(`${p}: ${o[p]}\n`);
    }
}

function factorial(x){
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}

//function declaration statements are 'hoisted' to the top of the enclosing script, function or block

//Function expressions
const square = function(x) {return x * x;};

//in order to invoke a function, it must be referred to by its name 

//Arrow functions
// =>
//expressions instead of statements so name is not required
const sum = (x, y) => { return x + y };
//if single return statement curly brackets can be omitted
const sum = (x, y) => x + y;
//if one parameter parenthesis can be omitted
const polynomial = x => x*x + 2*x + 3;
//arrow function with no arguments must be written with empty paren
const func = () => 1;
// => must be in the same line as the parameter
// inherit the value of 'this' keyword

//Nested Functions
function hypotenuse(a, b){
    function square(x){ return x * x; }
    return Math.sqrt(square(a) + square(b));
}

//Invoking functions - five ways
//1. functions
//2. methods
//3. constructors
//4. Indirectly through their call() and apply() methods
//5. Implicitly

//function invocation - expression consists of a function expression that 

