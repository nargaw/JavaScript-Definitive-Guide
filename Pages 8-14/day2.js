let x = 2, y = 5 // assign variables
console.log(x === y) //returns false
x !== y // inequality
x < y //less than or <= less than or equal to
y > x //grater than or >= greater than or equal to
console.log("two" > "three") //returns true because "tw" is greater than "th" alphabetically
console.log(true === (x < y)) //true

//logical operators
x ===2 && y ===5 //and
x > y || y < 4 //or
!(x === y) //inversion of boolean value 

//function - is a named and parameterized block of code that is defined once and can be called mutliple times.
plus1 = (a) => {
    return a + 1; //a is a parameter of the function plus1
}

console.log(plus1(y)) //5 + 1 = 6

square = (b) => {
    return b * b; //b is a parameter of the function square
}

console.log(square(x)) //2 * 2 = 4

//functions can be chained
console.log(square(plus1(x))) //2 + 1 = 3, 3 * 3 = 9

//methods - functions assigned to properties of an object
//all javascript objects including arrays have methods
let array = []
array.push(4, 5, 6) // push method adds elements to array
array.reverse() //reverse method reverses the order of array
console.log(array) //[6, 5, 4]
//define our own method with 'this' keyword

let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
]

//dist is a method we define to get the distance between two points
points.dist = function(){
    let p1 = this[0] //this references points = points[0]
    let p2 = this[1] //this references points = points[1]
    let a = p2.x - p1.x //p2.x is the x value of 1, p1.x is the x value of 0
    let b = p2.y - p1.y //p2.y is the y value of 1, p1.y is the y value of 0
    return Math.sqrt(square(a) + square(b)) //pythagorean theorem
}
console.log(points.dist()) //returns the distance between the two points

//function that returns the abs value of a number
function abs(x) {
    if (x >= 0){
        return x
    } else {
        return -x
    }
}







