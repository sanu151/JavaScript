
        // Find Vowel Consonant

        var c = prompt('Enter an alphabet : ');
        ch = c.toUpperCase();
        if(ch >= 'A' && ch <= 'Z')
        {
            if(ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
                document.write(c + ' is Vowel');
            else
                document.write(c + ' is Consonant');
        }
        else
            document.write('Invalid Entry!')
