//lval (lvalue): an expression that can legally appear on the left side of an assignment expression
//eg: variables, properties of objects, elements of arrays

//operator side effects
//assignment operators, ++ and --, delete

//operator precedence
//order in which operations are performed
//w = x + y * z;
//multiplication > addition > assignment
//parenthesis increase precedence

//operator associativity
//order in which operations of the same precedence are performed
//left to right
//w = x - y - z; same as: w = ((x-y)-z);
//right to left: exponentiation, unary, assignment, ternary
//y = a ** b ** c; same as y = (a ** (b ** c));

//order of evaluation
//precedence and associativity determine the order operations are performed

//arithmetic expressions
//can be used with BigInt operands or with regular numbers
// ** exponentitation
// * multiplication
// / division
// % modulo(remainder after division)
// + addition
// - subtraction

//convert values to number if necessary, if can't to numbers, convert to NaN
//if either operand is NaN result is NaN
//precedence
// ** > *, /, % > +, -
//** right to left (same as Math.pow())
//js all numbers are floating-point so division operations have floating-point results

//% modulo: returns the remainder after whole-number division of the first operand by the second operand
//sign of result is the same as the sign of the first operand
// 5 % 2 = 1
//-5 % 2 = -1
//modulo also works with floating point numbers

//+ operator
//binary operator adds numeric operands or concatenates string operands
// 1 + 2 //3 addition
//"1" + "2" // "12" concatenation
//"1" + 2 // "12" concatenation after conversion of number to string
//1 + {} //"1[object Object]" concatenation after conversion of object to string
//true + true //2 addition after boolean to number
// 2 + null //2 addition after null to 0
//2 + undefined //NaN undefined converted to NaN
//left to right associativity

//Unary arithmetic operators
//modify the value of a single operand to produce a new value
//all high precedence and right to left associative
// + , -, ++, --
//all convert operand to number, if necessary

//unary plus +
//convert operand to number or to NaN and return the converted value
//not used with BigInt

//unary mius -
//converts if to number or NaN if necessary
//change sign of the result

//Increment ++
//add 1 to operand(l value)
// ++i pre incremental: increments operand and evaluates to INCREMENTED value
// i++ post incremental: increments operand but evaluates to UNINCREMENTED value

//Decrement --
//subtrancts 1 to operand(l value)
//--i pre decremental: decrements operand and evaluates to DECREMENTED value
// i-- post decremental: decrements operand but evaluates to DECREMENTED value

//Bitwise Operators
//perform low-level manipulation of bits in the binary representation of numbers
//operate on numeric operands and return numeric values
//expect integer operands (32-bit integers)
//drop any fractional part beyond 32nd
//NaN, Infinity and -Infinity all convert to 0
//all bitwise operators can be used with regular number operands or BigInt except >>>

//Bitwise AND (&)
//performs a Boolean AND operation

//Bitwise OR (|)
//performs a Boolean OR operation

//Bitwise XOR (^)
//performs a Boolean exclusive OR
//either operand one is true or operand two is true but not both