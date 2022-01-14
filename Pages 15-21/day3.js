//Chapter 2 Lexical Structure
//JavaScript is a case sensitive language
//eg while must be typed while not While or WHILE
//js ignores line breaks and spaces between tokens
// (\u0020) - space character
//javascript recognizes tabs, assorted ASCII control characters and various Unicode characters as white-sapce

//comments
// -single line comment
/*
    multi line comment
*/

/**
 *  "*" is not required in each line for multiline comments but it works well
 */

//literals - data value that appears directly in a program
//identifiers and reserved words
//identifiers - used to name constants, variables, properties, functions and classes and to provide lebels for certain loops in javaScript code
//a javaScript identifier must begin with a letter, and underscore (_) or a dollar sign ($) - subsequent characters can be letters, digits, underscores or dollar signs
//digits are not allowed as the first character because javascript has to differentiate numbers from identifiers
//example
/*
 * _xyz
 * v56
 * $two
 * my_var
 */


//reserved words
//these words are offlimits as identifiers
/**
 * as
 * async
 * await
 * break
 * case
 * catch
 * class
 * const
 * continue
 * debugger
 * default
 * delete
 * do
 * else
 * export
 * extends
 * false
 * finally
 * for
 * from
 * function
 * get
 * if
 * import
 * in
 * instanceof
 * let
 * new
 * null
 * of
 * return
 * set
 * static
 * super
 * switch
 * target
 * this
 * throw
 * true
 * try
 * typeof
 * var
 * void
 * while
 * with
 * yield
 */

//words not currently used but reserved for the future
/**
 * enum
 * implements
 * interface
 * package
 * private
 * protected
 * public
 */

//unicode
//javascript programs are written using the unicode character set
//can use unicode charcters in strings and comments
//ASCII letters and digits are used only because of ease of editing
//Javascript allows mathematical symbols and words from non-english language as constants and variables

//unicode escape sequences
// begin with \u - support programmers and systems using older tech(cant process all unicode chars)
// plus four hexadecimal digtis (upper or lowercase) enclosed within curly braces
let x = 'caf\u00e9' //one character with containing e and accent
let y = 'caf\u{E9}' //another way of writing the same thing
let z = '\u{1F600}' //smiley face emoji
console.log(x)
// console.log(y)
console.log(z)

//unicode normalization
//defines the preferred encoding for all characters and specifies normalization - prevents source code that looks visually the same but is different
let a = 'cafe\u{301}' //accent added over the separate e
console.log(a)
console.log(x === a) //returns false because these two are not the same even though they look similar

//semicolons are optional if statements are written in separate lines
let n = 3
let m = 5
//semicolons are required  at end of statements if statments are written in the same line
let o = 5; let p = 8; let q = 6
//javascript treats line breaks as a semicolon
//if statements begin with (, [, /, +, or - there thre is a chance it could be interpreted as a continuation of the statement before
//after return, throw, yield, break and continue javascript assumes a line break or semicolon
//-- and ++ must appear on the same line as the expression
// => must appear on the same line as the parameter list