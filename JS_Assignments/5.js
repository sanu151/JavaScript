
        // Write a program to add all the numbers which can be devisible by 3 and 5 from 1-100

        var i = 1;
        sum = 0;
        
        document.write('Numbers are : ')
        while(i <= 100)
        {
            if(i % 3 == 0 && i % 5 == 0)
            {
                document.write(i +' ');
                sum += i;
                i++;
            }
            else
                i++;
        }
        document.write('<br>');
        document.write('Sum of all numbers : <b>'+sum+'</b>');
