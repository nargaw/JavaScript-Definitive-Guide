//Defining Function Properties
//functions are a specialized kind of object that can have properties
//when a function needs a "static" variable whose value persists across invocations, it is convenient to use a property of the function itself
//if information is used only by the function - no need to use a global variable

uniqueInteger.counter = 0;//function declarations are hoisted so assignment is possible before function declaration
function uniqueInteger(){
    uniqueInteger.counter ++; //returns incremented counter
}

//function that uses properties of itself to cache previously computed values
function factorial(n){
    if(Number.isInteger(n) && n > 0){
        if(!(n in factorial)){
            factorial[n] = n * factorial(n-1);
        }
        return factorial[n];
    } else {
        return NaN;
    }
}

//Functions as namespaces
//sometimes useful to define a function smply to act as a temp namespace in which it is possible to define variables without cluttering the global namespace
//immediately invoked function expression
(function(){//parenthesis surrounds function and invocation
    //chunk of code
}()); //end of function literal and invoked right after

//Closures
//Lexical scoping - functoions are executed using the variable scope that was in effect when they were defined not variable scope that is in effect when they are invoked
//Closure - combination of a function object and a scope in which the function's variables are resolved
//#1
let scope = 'global';
function checkScope(){
    let scope = 'local';
    function f(){ return scope; }
    return f();
}
checkScope() //'local'
//unique counter from above is susceptible to buggy or malicious code that can reset the value
//rewrite so closure keepes state of the counter variable private
let uniqueInteger = (function() {
    let counter = 0; //define and invoke private state of function
    return function(){ return counter ++;};
}());
uniqueInteger()//0
uniqueInteger()//1

//counter private variable n
function counter(){
    let n = 0;
    return {
        count: function(){ return n++; },
        reset: function(){ n = 0; }
    };
}
let a = counter();
let b = counter();
a.count(); //0
b.count(); //0
a.count(); //1
b.reset(); //0
a.count(); //2
//two methods share access to the private variable