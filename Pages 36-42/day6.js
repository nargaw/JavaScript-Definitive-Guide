//Strings
let str = "Hello World";
//obtain portions of a string
str.substring(1,4); // "ell"
str.slice(1,4); //"ell"
console.log(str.split(" ")); //["Hello", "World"]
//Search a string
str.indexOf("l") //2 position of first 'l'
str.indexOf("l", 4) //9 position of 'l' after position 4 (count starts with 0)
str.indexOf('Q') // -1 str does not include Q
str.lastIndexOf('o') // 7 position of last 'o'
//Boolean search a string
str.startsWith('Hel') //true
str.startsWith('abc') //false
str.endsWith('d')//true
str.includes('orl') //true
//creating modified versions of a string
console.log(str.replace('He', 'h3')); //h3llo world
str.toLowerCase() //hello world
str.toUpperCase() //HELLO WORLD
str.normalize() //unicode NFC normalization
//Inspecting Individal 16-bit characters of a string
str.charAt(0) //first character
str.charAt(str.length - 1)//last character
str.charCodeAt(0) //16-bit number of character
str.codePointAt(0) //code point value***I don't understand this
//String padding functions
'x'.padStart(2) //' x' //add space at the beginning
'x'.padEnd(2) // 'x ' //add space at the end
'x'.padStart(3, '*') //'**x' //add * at the beginning to a length of 3 (not including)
'x'.padEng(3, '$') //'x$$' //add $ at the end to a lenght of 3 
//Trimming functions
' x '.trim() //'x' //remove spaces from beginning and end
'x '.trimEnd() // 'x' //remove spaces from end
' x'.trimStart() // 'x' //remove spaces from beginning
//Misc
'x'.concat('+') //'x+'
'()'.repeat(10) //()()()()()()()()()()
//Strings are immutable in javaScript. Methods like replace() and toUpperCase() return new strings, they do not modify the previous strings
//Strings can be treated like read-only arrays
str[0] //'H'
str[str.length - 1] //'d'

//Template Literals
//delimited with backticks
let x = `yellow flowers`; //final value of strings between backticks is computed by evaluating any included expressions, converting the values of those expressions to strings and combining those computed strings with the literal characters within the backticks
let n = 'john'
let greeting = `Hello ${n}.`;
console.log(greeting) //Hello john.
//everything between ${} is interpreted as a js expression
//everything outside is normal string literal text
//can span multi lines

//tagged template literals
//if a function name comes right before the opening backtick, then the text and the values of the expressions within the template literal are passed to the function
`\n`.length //1 new line
String.raw`\n`.length //2 backslash and letter n

//Pattern Matching
//regular expressions(RegExp) for describing and matching patterns in strings of text
let text = "testing: 1, 2, 3"
let pattern = /\d+/g;
pattern.test(text) //true a match exists
text.search(pattern) //9 position of first match
text.match(pattern)// ["1", "2", "3"] array of all matching
text.replace(pattern, '#')//"testing: #, #, #"
text.split(/\D+/) //["", "1", "2", "3"] split on nondigits

//Boolean values
//true or false 
//similar to false: undefined, null, 0, -0, NaN, "" -> Falsy
//all others  -> Truthy
//toString() can be used to convert boolean values to strings
//&& AND
//|| OR

//Null and Undefined
//Null: indicates the absence of a value - object: no object
//Undefined: the values of variables that have not been initialized. Function with no values. Functions without necessary arguments
//both falsy values 
//distinguished by strict equality operator ===
//no properties or methods

//Symbols
//serve as non-string property names
let stringName = 'string name'; //type of string
let symbolName = Symbol('propName')//type of symbol
//never returns the same value twice, even when called with the same argument
//using symbolic property names prevent other modules of code in the program from accidentally overwriting properties
//takes an optional string argument, string will be include in the output
//Symbol().for returns the same value when called for the same string
//retrived by calling Symbol.keyFor() on the returned Symbol
let s = Symbol.for('shared')
let t = Symbol.for('shared')
s === t // true
s.toString() //"Symbol(shared)"
Symbol.keyFor(t) = 'shared'