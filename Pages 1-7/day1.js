console.log('Hello World')
//Tour of js
//This is a comment

let x //this is a variable
x = 1 //assign value to a variable

//different types of values
x = 1 //numbers
x = 0.01 //integers or reals
x = "apples" //strings
x = 'JavaScript' //another way of writing strings
x = true //boolean values
x = false //another boolean value
x = null //means no value
x = undefined //another special value like null

//additional types
//1. object - most important datatype in Javascript
//collection of name/value pairs (key/value pairs)
let book = { 
    topic: "JavaScript",
    edition: 10    
}
//onjects can be accessed using . or []
console.log(book.topic) //returns "JavaScript"
console.log(book["edition"]) //returns 10
book.author = "Person" //add a new property and value
console.log(book.author) // returns "Person"
book.content = {} //adds a new property content with empty object value
console.log(book.content) //returns empty object
//conditionally access properties with ?
//console.log(book.content?.chapter1?.section1) //returns undefined: book.conent has no chapter1 property

//2. Array - numerically indexed lists of values
let primeNumbers = [2, 3, 5, 7] //with in []
console.log(primeNumbers[0]) //first value of primeNumbers
console.log(primeNumbers.length) //returns 4 the length of the array
console.log(primeNumbers[primeNumbers.length - 1]) //returns the last value for primeNumbers
primeNumbers[4] = 10 //add new element to array
primeNumbers[4] = 11 //modify an element in the array
console.log(primeNumbers[4]) //return 11

//arrays and objects can contain other arrays and objects
let devices = [
    {mobile : 1},
    {computer: 5}
]
let something = {
    things: [
        [1, 5],
        ['apples', 'bananas']
    ]
}

//An expression is a phrase of JavaScript that can be evaluated to produce a value
//one of the most common ways to form expressions in JavaScript is to use operators
console.log(3 + 2) // returns 5
console.log(3 - 2) // returns 1
console.log(3 * 2) // returns 6
console.log(3 / 2) // returns 1.5
console.log("2" + "3") //returns 23 concationation of strings

//shorthand arithmetic operators
let count = 0 //define a variable
count ++ //increment variable
console.log(count)  //returns 1
let num = 10 //define variable
num -- //decriment variable
console.log(num) //returns 9
count += 2 //add 2 to the value of count
num *= 3 //mult 3 by the value of num
console.log(count, num) //returns 3 & 27