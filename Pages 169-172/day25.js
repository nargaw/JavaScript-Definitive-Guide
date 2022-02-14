//flattening arrays with flat() and flatMap() 
//flat() - creates and returns new array that contains the same elements as the array it is called on, except elements are flattened into the returned array
let array = [1, [2, 3]];
array.flat();//[1, 2, 3] 
//flat() - only flattens one level of nesting
let array2 = [1, [2, [3]]];
array2.flat();//[1, 2, [3]]
//takes argument to specify flattening level
//flatMap()
[-2, -1, 1, 2].flatMap(x => x < 0 ? [] : Math.sqrt(x)) //[1, 1.414]
//adding arrays with concat()
a = [1, 2, 3];
a.concat(4, 5);//[1, 2, 3, 4, 5]
//push(), pop(), shift() and unshift()
let arr = [];
arr.push(1, 2); //arr = [1, 2]
arr.pop(); //arr = [1]; returns 2 
arr.push(3); //[1, 3]
arr.pop(); //[1]; returns 3
arr.push([4, 5]);//[1, [4, 5]]
arr.pop();//[1] returns [4, 5]
arr.pop();//[] returns 1

let arr2 = [2, 3, 4, 5, 6];
arr2.shift();//[3, 4, 5, 6]
arr2.shift();//[4, 5, 6]
arr2.unshift(3); //[3, 4, 5, 6]

//slice(), splice(), fill(), copyWithin()
//slice() - returns a slice or subarray
let a = [1, 2, 3, 4, 5];
a.slice(0, 3);//[]//first start to second(not including)
a.slice(3);//one argument, start position to end of array
a.slice(1, -1);//-1 last position -2 second to last position

//splice() - general purpose for inserting or removing elemnts from array
//splice modifies the array on which it is invoked
//delete elements from an array

//fill() - set elements to a specified value, mutates the array it is called on
//copyWithin() - copies a slice of an array to a new position within the array

