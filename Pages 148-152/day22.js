//symbols as property names
//ES6 and later property names can be strings or symbols
const extension = Symbol("my extension symbol");
let o = {
    [extension]: {/*data here*/}
};
//symbols are opaque values, only use is as property names
//each symbol is different so symbols are good for creating unique property names

//Spread Operator
//ES2018 and later, can copy properties of an existing object into a new object using spread operator
let position = {x: 0, y: 1};
let dimensions = {width: 100, height: 50};
let shape = {...position, ...dimensions};

//Shorthand Methods
//a function defined as a property of an object = Method
let square = {
    // area: function(){
    //     return this.side * this.side;
    // },
    area(){
        return this.side * this.side
    },
    side: 10
};
square.area()//100

//getters and setters
//read/write property
let x = {
    dataProp: value,
    get accessorProp(){
        return this.dataProp;
    },
    set accessorProp(value){
        this.dataProp = value;
    }
};
//accessor properties are inherited 
