$(document).ready(function() {
    // Crystal values and functions
    var crystals = {
        gems: [
            0,
            0,
            0,
            0
        ],

        // Creates a value for a gem or the winner.
        getValue: function(min, interval) {
            return Math.floor(Math.random() * interval) + min;
        },

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

        // Creates the value for the gems
        generateValues: function() {
            // Creates a value for the gem and makes sure they're all different.
            $(this.gems).each(function(key, value) {
                do {
                    crystals.gems[key] = crystals.getValue(1, 12);
                }
                while (!(crystals.checkValue(key)))
            });
        },

        // Resets the game.
        resetGame: function() {
            // Sets all of the crystal values to 0.
            $(this.gems).each(function(key, value) {
                crystals.gems[key] = 0;
            });

            // Generates new values for the crystals
            this.generateValues();

            // Generates a new winning number.
            $("#winner").text(this.getValue(19, (120-19)));

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