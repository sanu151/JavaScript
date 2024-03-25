// Function to return Highest Run Scorer name using 2D array
        var playerlist = [
            ['Ankit', 71],
            ['Raju', 35],
            ['Satish', 42],
            ['Kanai', 85],
            ['Rahul', 105],
            ['Rana', 108]
        ]

        function highestRunScorer(playerlist)
        {

            var indexPlayer = 0;
            var highestScore = playerlist[0][1];
    
            for(var x=1; x<playerlist.length; x++)
            {
                if(playerlist[x][1] > highestScore)
                {
                    highestScore = playerlist[x][1];
                    indexPlayer = x;
                }
            }
            return playerlist[indexPlayer][0];
        }

        document.write('Highest Score Player : '+ highestRunScorer(playerlist));
