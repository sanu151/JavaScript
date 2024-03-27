// Higher Order Function and Callback Function

function square(x){
    console.log(`Square of ${x} : ${x*x}`);
}

function higherOrderFunction(num, callbackFunction){
    callbackFunction(num);
}

higherOrderFunction(6, square);

// This is also a example of Asynchronous Execution program.
// This block is not executed unless the button clicked, but next other below code will be executed.
document.querySelector('button').addEventListener('click', () => {
    console.log('Button Clicked');
});

console.log('This code Executed even if the button not clicked.')