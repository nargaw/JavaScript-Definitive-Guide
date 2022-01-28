//logical OR ||
//if one or both operands is truthy, returns a truthy value

//logical NOT !
//unary operator placed before a single operand, invert boolean value

//Assignment Expressions
i = 0; //set variable to i to 0
// = operator expects the left side to be an lvalue
//lvalue: variable or object property or array element

//Assignment with Operation
// +=, -=, *=, /=, %= operator and assignment
let a = 4;
let b = 5;
a += b; // a = a + b
a -= b; // a = a - b
a *= b; // a = a * b
a /= b; // a = a / b
a %= b; // a = a % b
a **= b; // a = a ** b
a <<= b; // a = a << b
a >>= b; // a = a >> b
a >>>= b; // a = a >>> b
a &= b; // a = a & b
a |= b; // a = a | b
a ^= b; // a = a ^ b

//Evaluation expressions
//js can interpret strings of js source code, evaluate them as a value
//eval()
eval("3 + 2") //5
//no way to sanitize user input to make it safe to use eval()
//security disable eval()
//eval() is a function, expects one argument
//if passed anything other than a string, it returns the value
//if passed a string, it parses the string as javascript code
//if eval() is called from the top-level code, it operates on global variables

//Miscellaneous Operators
// ?: conditional operator
//ternary operator, three operands
x > 0 ? x : -x;
//first operand interpreted as a boolean
//if first is truthy, second is evaluated, third is not evaluated
//if first is falsy, third is evaluated, second is skipped
//another way of writing an if statement