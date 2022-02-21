//Rest Parameters and variable-length argument lists
//Rest parameters enable the writing of functions that can be invoked with arbitrarily more arguments than parameters
//preveded by three periods
function max(first=-Infinity, ...rest){
    let maxValue = first;
    for(let n of rest){
        if (n > maxValue){
            maxValue = n;
        }
    }
    return maxValue;
}
//within the body of the function the value of a rest parameter will always be an array

//Arguments objects
//argument object - is an array-like object that allows the argument values pass to the function to be retrieved by number, rather than by name
function maxFunc(x){
    let maxValue = -Infinity;
    for(let i=0; i<=arguments.length; i++){
        if(arguments[i] > maxValue) maxValue = arguments[i];
    }
    return maxValue;
}

//Spread Operator for function calls
//used to unpack or "spread-out" the elements of an array in a context where individual values are expected
let numbers = [2, 4, 23, 12, 534, 6, 34, 16];
Math.min(...numbers);//2

//argument types
//no type checking 
//choose descriptive names for function arguments
//document carefully in the comments for each function
//javascript performs liberal type conversion

//Functions as values
//1. functions can be assigned to variables
//2. stored in the properties of objects or elements of arrays
//3. passed as arguments to functions etc

function square(x) { return x * x;  }
let s = square;
console.log(s(4));//16
console.log(square(4));//16

//methods
let o = { cube: function(x){return x * x * x;}};
let y = o.cube(2);//8

//functions don't require names when assigned to array elements
let a = [
    x => x * x,
    20
];
console.log(a[0](a[1]));//400