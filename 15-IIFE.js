// Immediately Invoked Function Expression (IIFE)

(function chai(){ // This turns the function into a function expression
                  // Without parentheses, JS thinks it's a normal function declaration and won’t allow immediate execution like this
    console.log(`DB CONNECTED`);
})();//---> For calling , semi-colon is imp here
 
// Why use IIFE?
// 1. Avoid polluting global scope
// Used for things like:

// 2. Run setup code immediately
// DB connections
// initialization logic
// config setup

( (name) => {
    console.log(`DB 2 CONNECTED ${name}`);
    
})("YES");