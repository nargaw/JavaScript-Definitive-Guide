//Function Definition Expressions
//defines a javascript function
//keyword function + 
//comma separated (zero or more) identifiers in a parenthesis +
//block of js code in curly braces
let square = function(x){
    return x * x;
}

//Property access expressions
//evaluates the value of an object property or an array element
//expression.identifier
//expression[expression]
//the expression before . or [ is evaluated first, if value is null or undefined = TypeError
//.identifier syntax is simpler but it can only be used whe the property accessed has a name that is a legal identifier

//conditional property access
//expression?.identifier
//epression?.[expression]
//? guards against typeerrors
//a?.b //if a is null or undefined, the expression evaluateds to undefined without accessing the property b
//also called optional chaining

//Invocation Expressions
//js syntax for calling or executing a function or method
//function expression is followed by open parenthesis, comma-separated list of zero or more arguments and a close parenthesis
square(5) //25
//if invocation is a property access expression - method invocation
//method invocations, the object or array that is subject of the property access becomes the value of the "this" keyword
//enables an object-oriented programming paradigm

//Conditional Invocation
//ES2020 - invoke a function using ?.() instead of ()
//avoids TypeError if the expression to the left of parenthesis is null or undefined
function square(x, log){ //second arg is optional function
    log?.(x);
    return x * x;
}
//conditional invocation of methods
o.m() //regular property access, regular invocation
o?.m() //conditional property access, regular invocation
o.m?.() //regular property access, conditional invocation
o?.m?.() //conditional property access, conditional invocation

//Object Creation Expression
//create a new object - invokes a function called a constructor
//initalize properties of that object
//prefixed with keyword 'new'
//new Object()
new Point(2,3)
//if no arguments are passed the empty pair of parentheses can be omitted
new Date

//Operator Overview
//arithmetic expressions, comparison expressions, logical expressions, assignment expressions and more
//Table 4.1

//Number of Operands
//binary operators that combine two expressions into a single, more complex expression
//unary operators convert a single expression into a single, more complex expression
//ternary operator ?: conditional operator that combines three expressions into a single expression

//Operand and result type
//most operators return a value of a specific type
//javascript operators usually convert the type of their operands as needed
// "3" * "5" //js convert operand to numbers //15(number)