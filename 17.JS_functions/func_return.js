var num1 = Number(prompt('Enter number 1 : '));
var num2 = Number(prompt('Enter number 2 : '));

function addition(num1, num2)
{
    var sum = num1 + num2;
    return sum;
}

function subtraction(num1, num2)
{
    var sub = num1 - num2;
    return sub;
}

function multiplication(num1, num2)
{
    var multiplication = num1 * num2;
    return multiplication;
}

function divide(num1, num2)
{
    var divide = num1 / num2;
    return divide;
}

function modulus(num1, num2)
{
    var modulus = num1 % num2;
    return modulus;
}

function power(num1, num2)
{
    var power = num1 ** num2;
    return power;
}

document.write(num1 + ' + ' + num2 +' = '+addition(num1, num2)+'<br>');
document.write(num1 + ' - ' + num2 +' = '+subtraction(num1, num2)+'<br>');
document.write(num1 + ' * ' + num2 +' = '+multiplication(num1, num2)+'<br>');
document.write(num1 + ' / ' + num2 +' = '+divide(num1, num2)+'<br>');
document.write(num1 + ' % ' + num2 +' = '+modulus(num1, num2)+'<br>');
document.write(num1 + ' ^ ' + num2 +' = '+power(num1, num2)+'<br>');