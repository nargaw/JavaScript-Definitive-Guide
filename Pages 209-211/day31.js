//Function Properties, Methods and constructor
//typeof returns "function" 

//Length property
//read-only, specifies the arity of the function
//arity - number of parameters it declares in its parameter list - usually the number of arguments that the function expects

//name property
//read-only, specifies the name used when the function was defined
//useful for debugging or error messages

//prototype property
//all functions except arrow functions have a prototype property that referes to prototype object
//when a function is used as a constructor, the new function inherits properties from the prototype object

//call() and apply() methods
//act as a method
//first argument for both - object on which the function is to be invoked - value of 'this' keyword
//on arrow function first argument is ignored bc it already inherited from 'this' value 
//any arguments to call() - listed: f.call(o, 1, 2);
//any arguments to apply() - array: f.apply(o, [1, 2]);
function trace(o, m){
    let original = o[m];
    o[m] = function(...args){
        console.log(new Date(), "Entering:", m);
        let result = original.apply(this, args);
        console.log(new Date(), "Exiting:", m);
        return result;
    };
} 

//bind() method
//bind a function to an object
//