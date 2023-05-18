//CALLBACK FUNCTIONS
//can become confusing with functions embedded in other functions, 'promises' solve this problem with async functions

//synchronous function example -- waits for function to complete before going to next
function add(a,b){
    return a+b;
}
console.log(add(1,2));
console.log(add(3,5));

//javascript runs functions async with a 'callback' function-- doesn't wait for response before moving on to next function
function add_async(a, b, callback){
    callback(a+b);
}

function print(c){
    console.log(c);
}

add_async(1, 2, print);

//ANONYMOUS FUNCTIONS == inline functions
//reduce lines of code with an inline callback function example:
add_async(1, 2, function(c){
    console.log(c);
})

add_async(1, 2, (c)=>{
    console.log(c);
})
//if callback fundtion is online 1 line of code you can write it as so:
add_async(1, 2, (c)=> console.log(c));

//Use LET keyword to declare another variable with the same name within a different scope (helpful in 'for' loops and functions)
var a = 10;
if(true){
    // var a = 20; <-- would print 20 for both console logs;
    let a = 20; // <-- will print 20 for the first console log and 10 for the second. Allows you to use 'a' differently in the scope of the function
    console.log(a);
}
console.log(a);

