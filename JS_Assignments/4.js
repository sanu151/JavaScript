
        // Vowel Consonent using Switch

        var c= prompt('Enter an Alphabet : ');

        ch = c.toLowerCase();

        switch(ch)
        {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                console.log(c + ' is a Vowel');
                break;
            default:
                console.log(c + ' is a Consonent');
        }
