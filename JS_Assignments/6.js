// Find largest number using ternary operator
var num1 = Number(prompt('Enter number 1 : '));
var num2 = Number(prompt('Enter number 2 : '));
var num3 = Number(prompt('Enter number 3 : '));

document.write('Largest number is : '+ (num1 > num2 ? (num1 > num3 ? num1 : (num2 > num3 ? num2 : num3)) : (num2 > num3 ? num2 : num3)));
