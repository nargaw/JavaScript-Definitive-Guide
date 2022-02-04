//objects as associative arrays
//object.property === object["property"]
//javascript is loosely typed - program can create any number of properties and not previously defined
//identifiers must be typed literally, can't be manipulated
//[] used dynamic
//. used static

//Inheritance
//js objects have a set of "own properties"
//also inherit properties from prototype object
//property assignment examines the prototype chain only to determine whether the assignment is allowed

//Property Access Errors
//not an error to query a property that does not exist
//property access expressions will fail if left side of (.) is null or undefined
//different way of writing these two statments
let x = book && book.author && book.author.firstname;
let y = book?.author?.firstname;

//Deleting Properties
//removes property from an object
delete book.author;
delete book['main title'];
//expression evaluates to true if the delete succeded or if the delete had no effect
//also evaluates to true if used meaninglessly
//doesn't remove properties that have a configurable attribute of false
//non-strict mode: omit reference to the global object
//strict: must refere to the global object to delete a configurable properties

//Testing Properties
//check if an object has a property with a given name
//hasOwnProperty() and propertyIsEnumerable() methods
let z = { x: 1};
z.hasOwnProperty('x');//true
z.propertyIsEnumerable('x');//true

//Enumerating properties
//obtain list of all properties of an object
