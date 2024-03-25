// Guessing game : Guess random number from 1 to 5.

var noOfWon = 0;
var noOfLost = 0;

for(var i=1; i<=5; i++)
{
    var guessNumber = Number(prompt("Enter a Number from 1 to 5 : "));

    var randomNumber = Math.floor((Math.random()*5)+1);

    if(guessNumber == randomNumber)
    {
        console.log("You have Own");
        noOfWon += 1;
    }
    else
    {
        console.log("You have Lost. Random number was : "+randomNumber);
        noOfLost += 1;
    }
}

document.write("Total Number of Win : "+noOfWon +"<br>");
document.write("Total Number of Lost : "+noOfLost+"<br>");