//splice
//delete elements frm array, insert new elemens ino array or both operations at the same time
//first argument - array poisition
//second argument - length to delete (if omitted - all element from the start element to the end of array are removed)
//third, fouth etc - elements to add at array position
let array = [1, 2, 3, 4, 5];
array.splice(2, 2, "c", "d");
console.log(array);//[1, 2, "c", "d", 5]

//fill - set elements of an array or a slice of an array to a specified value
//mutates the array it is called on, returns modified array
//first argument - value to use
//second argument - start position
//third argument - end position not including
let a = new Array(5);
a.fill(1);//[1, 1, 1, 1, 1]
a.fill("a", 2, 4);
console.log(a);//[1, 1, 'a', 'a', 1]

//copyWithin() - copies a slice of an array to a new position within the array
//won't change the length of the array
//first argument - destination index
//second argument - index of the first element to be copied (if omitted 0 is used)
//third argument - end of the slice of elements to be used (not including)
let b = [1,2,3,4,5];
b.copyWithin(2, 3, 5);//[1, 2, 4, 5, 5]

//array searching and sorting methods
//indexOf() - search from beginning to end
//lastIndexOf() - search from end to beginning
let c = [0, 1, 2, 1, 0]
c.indexOf(1); // 1
c.lastIndexOf(1);//1
c.indexOf(2);//2
c.lastIndexOf(4);//-1

function findall(a, x){
    let results = [],
        len = a.length,
        pos = 0;
    while(pos < len){
        pos = a.indexOf(x, pos);
        if (pos === -1) break;
        results.push(pos);
        pos += 1;
    }
    return results;
}

findall([1, 2, 4, 5, 6, 2, 1, 4, 2], 2);//[1, 5, 8]

//includes() - takes a single argument and returns true if array contains the value or false otherwise
//indexOf() - *strict equality* considers NaN value to be different from every other value including itself
//includes() - considers NaN to be equal to itself
let arr = [2, 3, NaN];
arr.indexOf(NaN);//-1 can't find NaN
arr.includes(NaN); //true

//sort() - sorts elements of an array in place and returns sorted array
//no argument - sorts in alphabetical order, undefined elements are sorted to the end of the array
//non alphabetical order sort must pass a comparison function as an argument to sort()
let numbers = [23, 403, 2, 439];
numbers.sort((a, b) => a - b);//[2, 23, 403, 439]
numbers.sort((a, b) => b - a);//[439, 403, 23, 2]

//reverse() -  reverses the order of the elements
let x = [1, 2, 3];
x.reverse();//[3, 2, 1]

//Array to string conversions
//join() - converts all array elements to strings and concatenates them and return the string
//argument is separater, comma is used by default
x.join();//"1,2,3"
x.join(" ");//"1 2 3"
x.join("");//"123"

//Static array functions
//Array class to determine if value is array or not - Array.isArray()
Array.isArray([]);//true
Array.isArray({});//false

//Strings as Arrays
//strings behave like arrays of UTF-16 unicode characters
let str = 'test';
str.charAt(0);//'t'
str[2];//'s'
typeof(str);//string
//strings are immutale values, so when treated as arrays, they are read-only arrays. 
//push(), sort(), reverse() and splice() - do not work on strings (error or silent response)
