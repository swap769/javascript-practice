// Recursion:=> when function call itself
// Otherwise it will get called for infinite time
// If a function call itself then there must be an end point

let counter = 1;

function demo(number) {
    if (counter > number) { 
        return;
    }
    console.log("change yourself", counter);
    counter++;
    demo(number);

}
demo(10);









