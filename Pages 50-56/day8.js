//object to string conversions
//first converted to primitive using (prefer-string algorithm)
//result converted to a string

//object to number conversion
//first converted to primitive value using(prefer-number algorithm)
//result converted to a number

//special case operator conversions
//no-preference algorithm
//if either is a string => concatenate as string
//if not a strings => converts both arguments to numbers and add

//toString() and valueOf()
//toString() - return string representation of the object
//array toString() - converts each element to a string and joins the resulting strings with commas
//Date toString() - human readable and js parsable date and time string
//RegExp toString() - to string that looks like RegExp literal
/\d+/g.toString() //"/\\d+/g"

//valueOf() - convert an object to a primitive value that represents the object
//string,number and boolean valueOf() - wrapped primitive values
//arrays,functions and RegExp valueOf() - return object itself
//Date valueOf() - number of millisecods since 01/01/1970

//algorithms object to primitive
//prefer-string: first tries toString(), if not a string primitive, try valueOf(), if conversion is impossible TypeError
//prefer-number: valueOf() first and then toString()
//no-preference: depends on the class of the object being converted (Date - prefer string, any other - prefer number)


//Variable Declaration and Assignment
//use of names or identifiers to represent values
//assigning a value to a variable
//the value associated with the variable may change or vary as the program runs
//first declare variable with let and const keywords

//let
let x;
let string;
//multiple variable can be declared in a single let statement
let y, val;
//good programmming practice to assign an initial value to variable
let z = 55;
let message = "hey there";
//if no inital value, value is undefined

//const
//must be initalized when declared
const C = 299792.458;//speed of light in a vaccum
//const is constant; cannot have their values changed; attempt to change value causes a TypeError
//common to declare constants using names with all capital letters to easily distinguish from variables

//variable and constant scope
//scope of a variable is the region of the program source code that it is defined
//let and const variables are block scoped - defined within the block of code
//bloc - javasScript class and function definitions
//variables and constants  declared as part of for, for/in, or for/of loop have loop body as their scope
//decleration outside of any code block - global variable/constant
//Node - scope of global variable - file it is defined in
//client side - scope is HTML document in which it is defined in <script>

//legal but bad practice to declare a new variable with the same name in a nested scope
//unlike statically typed languages - javaScript - can hold a value of any type
//legal but bad practice to declare a variable as on type and later change the type of variable (eg: number to string)
