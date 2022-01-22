//Global Object
//globally defined identifiers that are available to a javaScript program
//in Node, the global object is referred by 'global'
//in browser, the Window object serves as the global object, defines the core global properties
//cod in a worker can refer to its global object as self
//globalThis - ES2020 standard way to refer to the global object in any context

//Immutable Primitve values and Mutable object references
//Primitive values: undefined, null, booleans, numbers and strings
//Objects: arrays and function
//Primitive values are immutable (cannot change)
let str = "hello"
console.log(str.toUpperCase()) //returns "HELLO" but str is not altered
//primitives are compared by values
//strings compare with length and character at each index

//Objects are Mutable, values can change
let o = { x : 1}
o.x = 2 //value is changed
o.y = 3 //add a new property, change value of object

let b = [4,5,6]
b[0] = 1; //change existing element
b[3] = 7; //add new element
//two distinct objects are not equal even if they have the same properties and values
//objects are also called reference types, two object values are the same if and only if they refer to the same underlying object
let x = [];
let y = x;
x[0] = 1;
y[0] // 1
x === y //true because they both refer to the same object
//assigning an object to ta variable simply assigns the reference it does not create a new copy of the object
//to copy an object or array, one must copy the properties of the object or the elements of the array
let a = ['1', '2', '3'];
let b = [];
for (let i=0; i < a.length; i++){
    b[i] = a[i];
}
let c = Array.from(b); //copy arrays with Array.from()
//compare arrays function
function equalArrays(a, b){
    if(a === b) return true;
    if(a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]) return false;
    }
    return true;
}

//TYPE CONVERSIONS
//javascript will convert types automatically
10 + " object" // "10 object" convert to string
'7' * 4 // 28 '7' converted to a string
let n = 1 - 'x' // n == NaN; 'x' can't convert to a number
n + " objects" // "NaN objects" NaN is converted to "NaN"
//Conversions and equality
// === doesn't consider its operands to be equal if they are not of the same type
// == compares with respect to type conversion
0 == "0" //true
0 === "0" //false

//Explicit conversions - make conversions explicit to make code clear
//use Boolean(), Number(), String()
Number('6') //6
String('true') //true
Boolean([]) //true
//certain javascript operators perform implicit type conversions and are used explicitly for the purpose of type conversion
// x + "" //converts to a string, one is a string
// +x //Number(x)
// x - 0 // Number(x)
//!!x // Boolean(x) *double !!
//toString() accepts a radix argument to convert to base 10 automatically
//toString() takes argument 2, 8, 16 ...
let num = 18;
let binaryNum = "0b" + num.toString(2); // to binary
let octalNum = "0o" + num.toString(8); // to octal
let hexNum = "0x" + num.toString(16); // to hex
//toFixed() converts a number to a string with a specified number of digits after the decimal point.
//toExponential() converts a number to a string using exponential notation
//toPrecision() converts a number to a string with number of specified significant digits
let n1 = 1234567.89012345;
n1.toFixed(0) //1234567
n1.toFixed(2)  //1234567.89
n1.toExponential(1) //1.2e+6
n1.toExponential(3) //1.234+6
n1.toPrecision(7) //1234567
n1.toPrecision(10) //1234567.890
//parseInt() parses only integers
//parseFloat() parses both integers and float point numbers
parseFloat("3.14 meters") //3.14
parseInt("-16.89") //-16
//parseInt() accepts a radix argument

//Object to primitive conversions
//three fundamental algorithms
//1. prefer-string: returns a primitive value, preferring a string 
//2. prefer-number: returns a primitive value, preferring a number
//3. no-preference: expresses no preference about the type of primitive value
//Date class implements prefer-string algorithm
