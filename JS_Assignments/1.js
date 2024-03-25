
        //Get first name from user
        //Get last name from user
        //Add without using library function
        //Print full name
        //Total length of full name
        //Convert full lname into uppercase
        //Print the 2nd position from full name

        var nl = "<br/>";
        var firstName = prompt("Enter your First name : ");
        var lastName = prompt("Enter your Last name : ");

        var fullName = firstName+" "+lastName;
        document.write(fullName);
        document.write(nl);

        var totalLength = fullName.length;
        document.write("Total length of this name : "+totalLength);
        document.write(nl);

        var _uppercase = fullName.toUpperCase();
        document.write("Uppercase of Full Name : "+_uppercase);
        document.write(nl);

        document.write("2nd position character from full name : "+ fullName.charAt(1));

