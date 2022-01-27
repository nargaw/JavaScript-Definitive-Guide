//Bitwise NOT (~)
// ~ operator is a unary operator appears before its single integer operand
//reverse all bits in the operand
//equivalent to changing the sign and subtracting 1.

//Shift left <<
//<< movves al bits in its first operand to the left by the number of places specified in the second operand
//second operand (integer between  0 - 31)
//bit is shifted towards zero and 32nd bit is lost
//shift one position equivalent to multiplying by 2
//shift two positions equivalent to multiplying by 4
console.log(7 << 2) //28

//Shift right >>
// >> moves all bits in its first operand to the right by number specified in the second operand
//second operand (integer between 0 - 31)
//bits that are shifted off the right are lost
//If the first operand is positive the result has zeros placed in the high bits
//if the first operand is negeative the rsult has ones placed in the high bits
//shift one position equivalent to dividing by 2
//shift two positions is equivalent to dividing by 4
console.log(8 >> 2) //2

//Shift right with zero fill (>>>)
//bits shifted in on the left are always zero regardless of the sign of the first operand
//cant use with BigInt

//Relational Expressions
//equals, less than or property of between two values and return true or false

//Equality and Inequality Operators
// == vs === check sameness of two values using different definitions
//both accept oprands of any type
//both return true or false depending on their definition
// === strict equality (checks if "identical")
// == equality (checks relaxed definition of sameness that allow type conversions)
// != vs !== (relaxed opposite vs strick opposite) not equal to vs not strictly equal to
// = -> assignment
// == -> equality (source of bugs use === instead)
// === -> strict equality

//javascript compares by reference not by value
// object is equal to itself but not any other object
// even if objects have the same properties, names and values they are still not equal

//strict equality === does not perform type conversions
//different types: not equal
//if both are null or both are undefined: equal
//if both have boolean value true or false: equal
//if one is NaN: not equal
//if both are numbers and have the same value: equal
//if both are strings and contain exactly the same 16-bit values in same positions: equal
//if both refer to the same object, array or function: equal

//equality with type conversion == performs type conversions
//if one is null and other undefined: equal
//if one is number and the other a string: convert string to number try comparison
//if either value is true, convert to 1 and compare
//if either value is false, convert to 0 and compare
//"1" == true //returns true (true is converted to 1, string is converted to number and compare)

//Comparison Operators
//less than < - evaluates to true if first operand is less than second operand
//greater than > - eval to true if first operan is greater than second operand
//less than or equal to <=
//greater than or equal to >=
//comparison can only be performed only on numbers and strings
//strings are compared using alphabetical order where the numerical order of the 16-bit unicode values that make up the strings

//robust string comparison algorithm String.localeCompare()
//case sensitivity: String.toLowerCase() or String.toUpperCase()

//The 'in' operator
//expects a left-side operand that is a string, symbol, or value
//expects a right-side operand tha is an object
let point = { x: 1, y: 2}
console.log(x in point) //true

//InstanceOf operator
//expects left-side: object
//expects right-side: operand that identifies a class of objects
//true if left side object is an instance of right side class
let d = new Date();
console.log(d instanceof Date) //true
console.log(d instanceof Number) //false
//all objects are instances of Object
//if right side is not a class of objects: TypeError

//Logical Expressions - &&, ||, ! - perform boolean algebra and often used in conjunction with the relational operators

//Logical AND (&&)
//1. join two relational expressions
x === 0 && y === 0 //true if and only if both x and y are 0
//falsy values: false, null, undefined, 0, -0, NaN and ""
//truthy values: everything else
//&& if both are truthy: return a truthy value
//if one or both operands are falsy: return falsy value