//First Defined ??
//?? evaluates to its first defined operand
//if first left operand is not null and not defined it returns the value
//if first is null or undefined it returns the right operand
a ?? b //equivalent to  (a !== null && a !== undefined) ? a : b
// || selects the first non-falsy operand (if value is zero it will be ignored - not good)

//typeof Operator
//unary operator placed before single operand
//value is a string that specifies the type of the operand

//delete operator
//unary operator that attempts to delete the objec property or array element
let o = { x: 1, y:2 };
delete o.x;
"x" in o //false property does not exist 

let p = [ 1, 2, 3];
delete p[1];
3 in p //false element 3 does not exist
p.length // 3 array length does not change

//await operator
//introduced for asynchronous programming
//expects a promise object as its sole operand
//makes program behave as if it were waiting for the asynchronous computation to complete
//fulfillment value of the promise object

//void operator
//unary operator appears before a single operand
//evaluates its operand then discards the value and returns undefined

//comma operator
//binary operator, evaluates left and right and returns the value of the right operand
i=0, j=1, k=2; //same as i=0; j=1; k=2;

/**
 * Statements
 * 
 * statements are javascript sentences. Terminated by ;
 * expressions are evaluated to produce a value
 * statements are executed to make something happen
 * 
 * assignments and function invocations can stand alone as statements
 * javascript interpreter executes statements one after the other in order they are written
 * 
 * conditionals: 'if' and 'switch' make js interpreter execute or skip other statements
 * loops: 'while' and 'for' execute statements repetitively
 * jumps: 'break' 'return' 'throw' cause interpreter to jump to another part of the program
 * 
 * Expression statements
 * -simplest are expressions that have side effects 
 * ++, -- : side effect of changing a variable value as if an assignment was performed
 * side effects affect the host environment or program state
 */

