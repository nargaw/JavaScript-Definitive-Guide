//NaN: not a number
//0/0: NaN
//Infinity/Infinity: NaN

//number.MIN_VALUE/2: 0 underflow
//-number.MIN_VALUE/2: -0 negative zero
//-1/Infinity: -0 negative zero

//Number.parseInt()
//Number.parseFloat()
//Number.isNaN(x) //Is x NaN?
//Number.isFinite(x) //Is x a Number and finite?
//Number.isInteger(x) //Is x an integer?
//Number.isSafeInteger(x) //-(2**53) < x < (2**53)
//Number.MIN_SAFE_INTEGER // -(2**53 - 1)
//Number.MAX_SAFE_INTEGER // 2**53 - 1

//NaN doesn't compare equal to any other value including itself
//Number.isFinite() returns true if its argument is a number other than NaN, Infinity or -Infinity
console.log(0 === -0) //returns true in JavaScript

//Binary Float Point and Rounding Errors
//Working with real numbers will be an approximation of actual number
//Binary float point representations cannot exactly represent numbers as simple as 0.1
//example
let x = .3 - .2;
let y = .2 - .1;
console.log(x === y); //returns false because the two values are not the same
//any programming language that uses binary floating point numbers has similar issue
//problem arises  during comparison but computation is very close to the actually value
console.log(x)
console.log(y)
//use integers for comparison instead of fractional values

//Arbitrary Precision Integers with BigInt
//BigInt - number type whose values are integers, representation of 64-bit integers
//Thousands to millions of digits
//Not suitable to Cryptography bc of timing attacks
//written as string of digits ending with a lowercase 'n'
0b11111n //binary BigInt
//BigInt(Number.Max_SAFE_INTEGER) //function


//Dates and Times
//Date class for representing and manipulating dates and times.
//Also has the number of elasped milliseconds since Jannuary 1, 1970
let timestamp = Date.now();
console.log(timestamp);
let now = new Date();
let ms = now.getTime();
let iso = now.toISOString();

//Text
//represented as a string
//immutable ordered sequence of 16-bit values
//use 0 based Indexing for strings and arrays
//sequences of unsigned 16-bit values

//String Literals
let string = 'This is a string'
let stt2 = "This is also string"
let str3 = `This is a string as well`
//break string literals across multiple lines by ending each line with a backslash (\)
//use (\) to escape any apostrophes that appear in single-quoted strings
//use different quote types in JS vs HTML

//Escape sequences in string literals
// \n - escape sequence that representas a newline character
// \' - escape a single quote character
let sentence = "you\'re very cool"

//Working with strings
//concatenate strings
let msg = "hello, " + "world"
console.log(msg)
//standard equality and inequality 
//evaluates as true if they consist of exactly the same equence of 16-bit values

