
        // Find Greater value

        var num1 = parseFloat(prompt('Enter number 1 : '));
        var num2 = parseFloat(prompt('Enter number 2 : '));
        var num3 = parseFloat(prompt('Enter number 3 : '));

        if(num1 > num2 && num1 > num3)
            document.write(num1 + ' is the largest number');
        else if(num2 > num3)
            document.write(num2 + ' is the largest number');
        else
            document.write(num3 + ' is the largest number');
