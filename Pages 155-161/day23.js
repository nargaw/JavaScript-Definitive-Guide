//arrays
//an array is an ordered collection of values
//each value is an element
//each element has a numeric position in the array (index)
//arrays are untyped: maybe of any type, different elements of the same array could have different types
//arrays can be arrays of objects and/or arrays of arrays
//0 based
//highest index is 2^32 - 2
//dynamic
//may be sparse: no need to be contiguous indexes
//each array has a length property
//inherit properties from Array.prototype
//js strings behave like arrays of characters
//ES6 introduced typed arrays - fixed length and fixed numeric element type

//Create Arrays
//array literal
let array = [];
let primes = [2, 3, 5, 7];
let misc = [9.4, false, "hello",]//trailing comma is legal
//array literals can contain object literals or other array literals
let x = [
    [1, {
        x: 1,
        y: 2
    }],
    [2, {
        x: 3,
        y: 4
    }]
];
let sparseArray = [1,,3]; //no element at index 1
//spread operator - convient to create a shallow copy of an array
let a = [1, 2, 3];
let b = [0, ...a, 4]; //b = [0, 1, 2, 3, 4]
//spread operator works on any iterable object(for/of loop)

//array() constructor
let a = new Array();
let b = new Array(5);//argument specifies a length
//Array.of() - argument is array length
//creates and returns a new array
Array.of() // [];
Array.of(10) // [10];
//Array.from() - expecs an iterable or array like object
//way to make a true-array copy of an array-like object
//optional second argument - function that takes the source object and stores the result in the array instead of original

//reading and writing array elements
//sparse arrays - array elements dont have contiguous indexes starting at 0
//array length - every array has a length property

//Adding and deleting array elements