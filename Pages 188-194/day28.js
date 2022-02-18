//recursive functions
//a function that calls itself
//when a function calls another function, a new execution context is pushed onto the stack
//the call stack takes memory
//if function cals itself ten thousand time, it is likely to fail "Maximum call-stack size exceeded"

//Method invocation
//a method is a function stored in a property of an object
//use the dot notation for property access
//methods and 'this' keyword are central to the object-oriented programming paradigm

//Method chaining
//use return value of one method invocation as part of a subsequent invocation
//doStepOne().then(doStepTwo).then(doStepThree).catch(handleErrors)

//'this' keyword is not scoped the way variables are. Arrow functions inherit this
const f = () => {
    this === o //true, since arrow functions inherit this
};
//functions dfined as expresions instead of statements are not hoisted

//Constructor Invocation
//differ in their handling of arguments, invocation context and return value
//parenthesis can be omitted in constructor invocation
o = new Object();
o = new Object;
//creates a new, empty object, intended to initalize objects
//do not normally use the 'return' keyword
//return implicitly when it reached the end of their body

//Indirect Invocation
//call() and apply() invoke fuction indirectly 
//both methods allow to explicitly specify the 'this' value for the invocation
//call() uses its own argument list 
//apply() expects an array of values to be used as arguments

//Implicit Function Invocation
//need to be extra careful when writing functions that maybe implicitly invoked (bugs, side effects, performance issues)
//1. If an object has getters and setters defined
//2. when an object is used in a string context, toString() method is called, valueOf() is invoked
//3. looping over elements of an iterable object
//4. tagged template literal
//5. proxy objects

//Function arguments and parameters
//function invocations do not do any type checking
//function invocations do not check the number of arguments being passed

//Optional Parameters and Defaults
//when a function is invoked with fewer arguments than declared parameters, the additional parameters are set to their default value (normally undefined)
//useful to write function so that some arguments are optional
function getPropNames(o, a){
    //if (a === undefined) a = []; //if undefined use empty array
    a = a || [];//can use || operator instead of if statement
    for (let property in o) a.push(property);
    return a;
}
//'||' returns first argument if argument is truthy and otherwise returns its second argument
//if second arguement is omitted a newly created empty array is used

