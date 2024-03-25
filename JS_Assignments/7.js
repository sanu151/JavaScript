// Add 2 numbers using IIFE
var num1 = Number(prompt("Enter First Number : "));
var num2 = Number(prompt("Enter Second Number : "));

(function sum(x, y)
{
    document.write("Sum of ",x," and ",y," is : ",x+y);
})(num1, num2);
