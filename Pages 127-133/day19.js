//Objects
//a compositive value, it aggregates multiple values and able to store and retrieve those values by name
//unordered collection of properties, each with a name and a value
//names are usually strings (can also be symbols)
//js object also inherits the properties of another object "prototype" - "prototypal inheritance"
//object may not have two properties with the same name
//'own property' - non-inherited properties
//three additional property attributes
    //1. writable - specifies if a value of property can be set
    //2. enumerable - specifies the property name is returned b a for/in loop
    //3. configurable - specifies whether the property can be deleted and its attributes can be altered

//creating objects
//use new keyword with Object.create() function
//object literals - comma seperated list of colon-separated name:value pairs enclosed within curly braces
let empty = {};
let point = { x: 0, y: 1};
//trailing comma after the last property is legal, encoureged by programming styles

//creating objects with new
let o = new Object(); //new object o = {};

//prototypes: every js object has a second js object associated with it
//the first object inherits from the prototype
//all objects created by object literals have the same prototype object
//Object.prototype has no prototype, it doesn't inherit any properties

//Object.create() - creates a new object using its first argument as the prototype of that object
let o1 = Object.create({x: 1, y: 2});
let o2 = Object.create(null); //new object w/out prototype
let o3 = Object.create(Object.prototype); //{} or new Object()
//Object.create guards against accidental modifications

//Querying and setting properties
//use dot (.) or brackets ([])
let book = {
    "main title": "JavaScript",
    "sub title": "The Definitive Guide",
    author: {
        firstname: "David",
        lastname: "Flanagan",
    },
};
let author = book.author;
let title = book['main title'];
//create property / change 
book.edition = 7; //add 'edition' property
book['main title'] = "ECMAScipt"; //change title of the book
