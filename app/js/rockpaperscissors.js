////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move = Math.random();
    if (move <= 0.33) {
        move = "rock";
    } else if (move => 0.66) {
        move = "paper";
    } else if (move <= 1) {
        move = "scissors";
    } else (move === null); {
        getInput();
    }
    return move;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
}


function getComputerMove(move) {
    var move = Math.random();
    if (move <= 0.33) {
    move = "rock";
    } else if (move => 0.66) {
    move = "paper";
    } else if (move <= 1) {
    move = "scissors";
    } else (move === null); {
    move = randomPlay();
    }
    return move;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove == "rock") {
        if (computerMove == "rock") {
            winner = "tie";
        } else if (computerMove == "paper") {
            winner = "computer";
        } else if (computerMove == "scissors") {
            winner = "player";
        }
    } else if (playerMove == "paper") {
        if (computerMove == "rock") {
            winner = "player";
        } else if (computerMove == "paper") {
            winner = "tie";
        } else if (computerMove == "scissors") {
            winner = "computer";
        }
    } else if (playerMove == "scissors") {
        if (computerMove == "rock") {
            winner = "computer";
        } else if (computerMove == "paper") {
            winner = "player";
        } else if (computerMove == "scissors") {
            winner = "tie";
        }
    } else {
        console.log("Not a choice");
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner == "player") {
            console.log("Player chose " + playerMove + " and computer chose " + computerMove + ". Player wins this round.");
            playerWins++;
        } else if (winner == "computer") {
             console.log("Player chose " + playerMove + " and computer chose " + computerMove + ". Computer wins this round.");
            computerWins++;
        } else if (winner == "tie") {
            console.log("It's a tie");
        }
        console.log("Player: " + playerWins + " Computer: " + computerWins);
    }
    return [playerWins, computerWins];
}
