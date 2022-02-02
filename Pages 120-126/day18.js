//Misc Statements
//1. 'with' statement runs a block of code as if the properties of a specified object were variable in scope for the code
//2. 'debugger' perform debugging action
//3. 'use-strict' indicate the code that follows is strict code

//Declarations
//const,let,var
//function - function
function area(radius){
    return Math.PI * radius * radius; 
}
//class - class
class Circle {
    constructor(radius){
        this.r = radius;
    }
    area(){
        return Math.PI * this.r * this.r;
    }
    circumference(){
        return Math.PI * this.r * 2;
    }
}

//Import and export - used together to make values defined in one module of js code available in another module
//export const TAU = 2 * Math.PI;
//import {TAU} from './geometry/constants.js';
