// Highest Socre using 1D array
var score = new Array;
var n = Number(prompt('Total entry : '));

for(var i=0; i<n; i++)
{
    score[i] = Number(prompt("Enter a number :"));
}

function highestScore(score)
{
    var hiScore = score[0];

    for(var i=1; i<score.length; i++)
    {
        if(score[i] >= hiScore)
            hiScore = score[i];
    }
    return hiScore;
}

document.write("Highest Score : "+ highestScore(score));
