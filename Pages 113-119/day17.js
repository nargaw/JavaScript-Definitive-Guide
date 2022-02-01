//Jumps
//jump statements cause js interpreter to jump to a new location in the source code
//the 'break' statement makes the interpreter jump to the end of a loop or other statement
//the 'continue' statment makes the interpreter skip the rest of the body and jump back to the top of the loop to begin a new iteration
//the 'return' statement makes the interpreter jump from a function invokation back to the code that invoked it and also supplies the value for the invokation
//the 'throw' statement raises or throws and exception and is designed to work with try/catch/finally statement

//break
//alone:  causes a loop or switch to exit 
//used within the switch statment
let matrix = getData();
let sum = 0, success = false;
computeSum: if (matrix){
    for (let x= 0; x < matrix.length; x++){
        let row = matrix[x];
        if (!row) break computeSum;
        for(let y = 0; y < row.length; y++){
            let cell = row[y];
            if(isNaN(cell)) break computeSum;
            sum += cell;
        }
    }
    success = true;
}
//break statement jump here if success = false
// or success = true, sum contains the sum of all cells of the matrix

//continue
//instead of exiting the loop, continue restarts the loop at the next iteration
//can be used only within the body of a loop
for (let i=0; i = data.length; i++){
    if(!data[i]) continue;
    total += data[i];
}

//return
//only within the body of a function
//without return statement the function executes each of the statements in the function body until it reaches the end of the function and return to its caller

//yield
//used in generator functions

//throw
//an exception to signal an error or exceptional condition -indicates some sort of error has occured
function factorial(x){
    if (x < 0) throw new Error('x must be a positive number');
    let f;
    for (f = 1; x > 1; f *= x, x--)
    return f;
}

//try/catch/finally
//try: fines the clock of code whose exceptions are to be handled
//catch: invoked when an exception occurs anywhere within the try block
    //catch is followed by identifier in parenthesis
//finally: cleanup code that is guarenteed to be executed, regardless of what happens in the try block
