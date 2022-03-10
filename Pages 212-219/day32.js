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
let mean = reduce(data, sum)/data.length;
let deviations = map(data, x => x - mean);
let stddev = Math.sqrt(reduce(map(deviations, square), sum)/(data.length - 1));
console.log(stddev)//2
//Higher order functions - a function that operates on functions
//takes one more functions as arguments and returns a new function
function mapper(f){
    return a => map(a, f);
}
const increment = x => x + 1;
const incrementAll = mapper(increment);
incrementAll([1, 2, 3]) //[2, 3, 4]
//Partial Application of Functions
//allow to easily define interesting functions out of functions already defined

//Memoization - caching of previously computed results
//memoize() - accepts a function as its argument and returns a memoized version of the function
function memoize(f){
    const cache = new Map();
    return function(...args){
        let key = args.length + args.join("+");
        if (cache.has(key)){
            return cache.get(key);
        } else {
            let result = f.apply(this, args);
            cache.set(key, result);
            return result;
        }
    }
}
//memoize() function creates a new object to use as the cache and assigns the object to a local variable so it is private to (in clousre of) the returned function