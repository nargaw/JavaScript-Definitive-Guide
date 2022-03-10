//CLASSES

/**
 * a class of objects sharing certain properties
 * members or instances of the class have their own properties to hold or define their state
 * they also have methods that define their behavior
 * 
 * If two objects inherit properties from the same prototype,
 * then we say that those objects are instances of the same class
 */

//classes and prototypes
/**
 * The prototype object is the central feature of a class
 * Object.create() - returns a newly created object that inherits from a specified prototype object
 * instances have furtur initialization
 */

// function range(from, to){
//     let r = Object.create(range.methods); //create new objects
//     r.from = from;
//     r.to = to;
//     return r;
// }

//classes and constructors
/**
 * a constructor is function designed for the initialization of newly created objects
 * critical feature is 'prototype' property
 */

function Range(from, to){
    this.from = from;
    this.to = to;
}

Range.prototype = {
    includes: function(x) { return this.from <= x && x <= this.to; },
    [Symbol.iterator]: function*(){
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },
    toString: function(){ return "(" + this.from + "..." + this.to + ")";}
}

let r = new Range(1, 3);

/**
 * constructor captialized Range()
 * constructor is invoked with 'new' keyword
 * constructor doesn't have Object.create(), initalizes using 'this'
 */