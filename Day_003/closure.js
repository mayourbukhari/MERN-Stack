//closure
// A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
    // A closure is created when a function is defined inside another function, allowing the inner function
    // to access variables from the outer function's scope.
    // This is useful for data encapsulation and creating private variables.
    // Closures are often used to create functions with private variables or to maintain state in asynchronous
    // operations, such as event handlers or callbacks.
    // In this example, the inner function can access the outer function's variable 'name'.
    // The inner function is returned, creating a closure that retains access to the outer function's
    // lexical scope, even after the outer function has finished executing.
    // This allows the inner function to access the 'name' variable even after 'greet' has returned.
    // This is a powerful feature of JavaScript that enables data encapsulation and function factories.
    // The inner function can be called later, and it will still have access to the 'name' variable,
    // demonstrating the closure's ability to remember its lexical scope.
    // The closure allows the inner function to access the outer function's variable 'name',
    // even after the outer function has finished executing.
    // This is a powerful feature of JavaScript that enables data encapsulation and function factories.
function greet(){
    let name = "Mohsin"; // This variable is in the lexical scope of the greet function
    //the lexical scope is the scope in which a function is defined, not where it is called.
   
    return function() {
        console.log("Hello, " + name + "!"); // The inner function can access the outer function's variable
    };
}
const sayhello = greet(); // sayhello is a closure that retains access to the 'name' variable
sayhello(); // Calling the closure will print "Hello, Mohsin!"



