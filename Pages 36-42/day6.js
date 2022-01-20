//Strings
let str = "Hello World";
//obtain portions of a string
str.substring(1,4); // "ell"
str.slice(1,4); //"ell"
console.log(str.split(" ")); //["Hello", "World"]
//Search a string
str.indexOf("l") //2 position of first 'l'
str.indexOf("l", 4) //9 position of 'l' after position 4 (count starts with 0)
str.indexOf('Q') // -1 str does not include Q
str.lastIndexOf('o') // 7 position of last 'o'
//Boolean search a string
str.startsWith('Hel') //true
str.startsWith('abc') //false
str.endsWith('d')//true
str.includes('orl') //true
//creating modified versions of a string
console.log(str.replace('He', 'h3')); //h3llo world
str.toLowerCase() //hello world
str.toUpperCase() //HELLO WORLD
str.normalize() //unicode NFC normalization
//Inspecting Individal 16-bit characters of a string
