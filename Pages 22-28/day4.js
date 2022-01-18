//Types, Values, Variables
//types - values that can be represented and manipulated in a programming language

//two types
//1. Primitive types - numbers, strings and boolean values, null and undefined, symbols
//2. Object types - collection of properties where each property has a name and value, keys and values

//Functions and classes are values that can be manipulated by JavaScript programs (special kind of object)

//Javascript interpreter performs automatic garbage collection for memory management
//when a value is no longe reachable - the interpreter knows it can never be used again and automatically reclaims memory it was occupying

//In javascript, null and undefined are the only values that methods cannot be invoked on
//object types are mutable
//primitive types are immutable

// object properties and array elements can be changed by a javascript program
//equality operator == performs type conversions, deprecated in favor of strict equality operator === doesn't do type conversions

//constants and variable allow the use of names to refer to values in the program
//constants - const
//variables - let (var is depricated)
//const and let are untyped

//NUMBERS
//javaScript, Number, represents integers and approximate real numbers
//64 bit floating point format - numbers as large as  1.79 x 10^308 and small as 5 * 10^-324
//represent all integers b/n -2^53 to 2^53
//larger values lose precision in the trailing digits
//numerical literals-when a number appears directly in a js program
//Integer literals: 
let zero = 0
let three = 3
//Javascript recognizes hexadecimal eg 
let x = 0xBA467F
let y = 0X83d5AD
let z = 0x48FF39
//Javascript recognizes binary (base 2) and octal (base 8)
let binary = 0b101011
let octal = 0o477

//Floating-point literals
//exponent notation: a number followed by e or E [digits][.digits][(E|e)[(+|-)]digits]
let float = 6.02e23
let float2 = 1.156E-15
//break up long literals into chunks that are easier to read using underscore
let billion = 1_000_000_000;

//Arithmetic in JavaScript
// +, -, *, /, % (remainder after division), ** (exponentation)
//complex mathematical operations through a set of functions and constants Math object
Math.pow(2, 53)
Math.round(.7)
Math.ceil(.4)
Math.floor(.6)
Math.abs(-10)
Math.max(x, y, z)
Math.min(x, y, z)
Math.random()
Math.PI
Math.E
Math.sqrt(x)
Math.pow(y, 1/3)
Math.sin(z)
Math.log(10)
Math.log(100)/Math.LN10
Math.log(512)/Math.LN2
Math.exp(3)

//more function in ES6
Math.cbrt(27)
Math.hypot(3,4)
Math.log10(100)
Math.log2(1024)
Math.log1p(x)