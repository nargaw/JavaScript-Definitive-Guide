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