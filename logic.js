
// This array will hold the options for the game
// Fill in your options below
const options = ["scissors", "rock", "paper"];

// This function takes in the userChoice and then prints the results to the console.
function playGame(userChoice) {

    // First remind the user of his/her choice
    console.log('You chose ' + userChoice + '.');

    // Now choose a random number between 0 and 2
    const rand = Math.floor(Math.random()*3);

    // Then use this random number to give the computer a choice
    const compChoice = options[rand];

    // Now log the computer's choice to the console.
    console.log('The computer chose ' + compChoice + '.');


    // Now determine the winner using if/else statements
    if (compChoice == userChoice) {
        console.log('You tied.');
    } else if  (compChoice == 'rock') {
        if (userChoice == 'scissors') {
            console.log('Rock beats scissors.  You lose.');
        } else {
            console.log('Paper beats rock.  You win!');
        }
    } else if (compChoice == 'paper') {
        if (userChoice == 'rock') {
            console.log('Paper beats rock.  You lose.');
        } else {
            console.log('Scissors beats paper.  You win!');
        }
    } else {
        if (userChoice == 'paper') {
            console.log('Scissors beats paper.  You lose.');
        } else {
            console.log('Rock beats scissors.  You win!');
        }
    }
}


























module.exports.playGame = playGame;
module.exports.options = options;
