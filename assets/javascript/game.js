$(document).ready(function() {
    // Crystal values and functions
    var crystals = {
        gems: [
            0,
            0,
            0,
            0
        ],

        // Checks the value of the gems to make sure that they're all different.
        checkValue: function(index) {
            // Compares the value of the gem to the other ones to make sure they aren't the same
            for(let i = 0; i < this.gems.length; i++) {
                if((index !== i) && (this.gems[i] == this.gems[index])) {
                    return false;
                }
            }

            return true;
        },

        // Resets the game.
        resetGame: function() {
            // Sets all of the crystal values to 0.
            $(this.gems).each(function(key, value) {
                crystals.gems[key] = 0;
            });

            // Generates new values for the crystals
            $(this.gems).each(function(key, value) {
                do {
                    crystals.gems[key] = Math.floor(Math.random() * 12) + 1;
                }
                // Makes sure that all the values are different.
                while (!(crystals.checkValue(key)))
            });

            // Generates a new winning number.
            $("#winner").text(Math.floor(Math.random() * (120-19)) + 19);

            // Resets the score to 0
            $("#current-score").text(0);
        },

        // Increments a victory or defeat
        endGame: function(id) {
            let end = parseInt($("#" + id).text());
            end++;
            $("#" + id).text(end);
            this.resetGame();
        }
    }

    // Starts the game
    crystals.resetGame();

    // For all crystals picked, their value (as noted in the array) are added to the score.
    $(".crystal").on("click", function() {
        let score = parseInt($("#current-score").text());
        score = parseInt($("#current-score").text(score + crystals.gems[$(this).attr("value")]).text());

        // If the score and random number match, then increase the wins.
        // Otherwise if the score is greater than the random number increase the losses.
        if(score == parseInt($("#winner").text())) {
            crystals.endGame("win");
        } else if(score > parseInt($("#winner").text())) {
            crystals.endGame("lose");
        }
    });
});