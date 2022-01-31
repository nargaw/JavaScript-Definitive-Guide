//do/while loop
//do statement while the expression is true
function printArray(a){
    let len = a.length, i = 0;
    if(len === 0){
        console.log("Empty Array");
    } else {
        do {
            console.log(a[i]);
        } while (++i < len);
    }
}

//for
//looping construct, more convenient than the while statement
//encodes each of the three manipulations as an expression and makes those expressions an explicit part of the loop syntax
//for (initalize; test; increment)
//statement
for(let count = 0; count < 10; count++){
    console.log(count);
}

//for loop can be used to traversea linked list data structure and return the last object
function tail(o){
    for(; o.next; o = o.next){
        return o;
    }
}

//for/of
//works with iterable objects
let data = [1, 2, 3, 4, 5, 6], sum = 0;
for (let element of data){
    sum += element;
}
console.log(sum); //21
//for/of objects
let z = {x: 1, y: 2, v: 3};
for (let element of z){//TypeError because z is not iterable
    console.log(element);
}
//to make z iterable use Object.keys() method
let z = {x: 1, y: 2, v: 3};
let keys = "";
for (let k of Object.keys(z)){
    keys += k;
}
console.log(keys) //xyv
//keys and values Object.entries()

//for/of with strings
let freq = {};
for (let letter of "excellence"){
    if(freq[letter]){
        freq[letter]++;
    } else {
        freq[letter] = 1;
    }
}
console.log(freq)//{e: 4, x: 1, c: 2, l: 2, n: 1}

//for/of with set and map
//maps, given a map it's possible to iterate and distructure its key/value pairs
let m = new Map([[1, "one"]]);
for(let [key,value] of m){
    console.log(key) //1
    console.log(value) //"one"
}

//async iteration with for/await
//asynchronous iterator - for / await loop

//for/in
//for/in works with any object after the in
//object is an expression that evaluates to an object
//less bugs to use for/of with Object.keys() instead of for/in