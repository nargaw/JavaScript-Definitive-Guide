//Enumerating Properties
//obtain a list of all properties of an objec
//for/in loop
let o = {x: 1, y: 2, z: 3};
for(let p in o){
    console.log(p);//logs x, y and z
}
//get an array of property names
//Object.keys() - returns array of enumerable own properties of object
//Object.getOwnPropertyNames() - returns an array of names of non-enumerable own properties as well, as long as names are strings
//Object.getOwnPropertySymbols() - returns own propeties whose names are symbols, whether they are enumerable or not
//Reflect.ownKeys() - returns all own propetry names, both enumerable and non-enumerable, both strings and symbol

//Extending Objects
//copy propetries of one object into another
let source = {x: 1};
let target = {y: 2, z: 3};
for (let key of Object.keys(source)){
    target[key] = source[key]; //target {x: 1, y: 2, z: 3}
}
//Object.assign() - expects two or more objects as arguments and modifies and returns the first argument

//Serializing Objects
//-process of converting an object's state to a string from which it can later be restored
//JSON.stringify() and JSON.parse() - serialize and restore js objects

//Object Methods
//toString() - no args - returns a sring that represents the value of the object on which it is invoked
//toLocalString() - returns a localized string representation of the object
let s = {x: 1, y: 2}.toString(); //s == "[object Object]"
//need to modify toString() to display useful information
let p = {
    x: 1000,
    y: 2000,
    toString: function(){
        return `(${this.x}, ${this.y})`;
    },
    toLocaleString: function(){
        return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`
    }
}
p.toString() //"(1000, 2000)"
p.toLocaleString() //"(1,000, 2,000)" - thousand separators

//valueOf()
//-called wen js needs to convert an object to some primitive type other than a string, typically a number
let k = {
    x: 3,
    y: 4,
    valueOf: function(){
        return Math.hypot(this.x, this.y);
    }
}
Number(k) // 5, valueOf() used for conversions to numbers

//toJSON()
//JSON.stringify() method looks for a toJSON() method on any object it is asked to serialize
let x = {
    a: 1, 
    b: 2,
    toString: function(){
        return `(${this.x}, ${this.y})`;
    },
    toJSON: function(){
        return this.toString();
    }
};
JSON.stringify([x]) //'["(1, 2)"]'

//Extended Object Literal Syntax
//shorthand #1 and #2 are the same
//#1
let j = 1, k = 2;
let o = {
    j: j,
    k: k
};
//#2
let j = 1, k = 2;
let o = {j, k};
return o.j + o.k; //3

//computed property names
//take square bracketed code and move directly into object literal


