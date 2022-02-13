//Adding and Deleting Array Elements
let a = [];
a[0] = "zero";
a[1] = "one";
//push()
a.push("two");
//delete
let b = [1, 2, 3];
delete b[2]; //array length = 3 doesn't affect array length, b = [1, 2,'']

//Iterating Arrays
let letters = [..."Hello World"];
let string = "";
for (let letter of letters){
    string += letter;
}
//string: "Hello World";

//built in array iterator for/of loop returns elements of an array in ascending order
//forEach()
//regular loop

//multidimensional arrays
//approximated with arrays of arrays
//use[][]

//Array methods
//array iterator methods
//1. forEach() - iterate through array invoking a function
let data = [1, 2, 3, 4];
let sum = 0;
data.forEach(value => {
    sum += value;//sum = 10
});
//2. map() - pass each element of the array on which it is invoked to the function specified and returns an array containing the values returned by function
let c = [1, 2, 3];
c.map(x => x * x);//[1, 4, 9]
//map returns new array, does not modify the array it is invoked on
//3. filter() - returns array containing subset of element of the array on which it is innvoked
let d = [4, 3, 2, 1];
d.filter(x => x < 3); //[2, 1]
d.filter((x, i) => i % 2 === 0)//[4, 2]
//4. find() and findIndex() - iterate through array looking for elements for predicate function returns a truthy value
//stop iterating the first time the predicate finds an argument
let e = [1, 2, 3, 4, 5];
e.findIndex(x => x > 3);//4
e.find(x => x % 5 ===0);//5
//5. every() and some() - apply predicate function and return true or false
let f = [1, 2, 3];
f.every(f => f < 10); //true
//some() - there exists
//6. reduce() reduceRight() - take array and function and return one value

