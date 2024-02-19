// Importing the prompt npm package
const prompt = require('prompt');

// Function to generate computer's selection
function generateComputerSelection() {
    const randomNumber = Math.random();
    

    if (randomNumber >= 0 && randomNumber <= 0.34) {
        return "PAPER";
    } else if (randomNumber >= 0.35 && randomNumber <= 0.67) {
        return "SCISSORS";
    } else if (randomNumber >= 0.68 && randomNumber <= 1.00) {
        return "ROCK";
    }
}


// Function to determine the winner
function determineWinner (userSelection, computerSelection){
    if (userSelection === computerSelection){
        return "It's a tie!";
    }
    if(userSelection === 'ROCK') {
        if (computerChoice === 'PAPER'){
            return "Computer Wins";
                }else{
                    return "User Wins";
                }
    }


if (userSelection === 'PAPER') {
    if (computerSelection === 'SCISSORS'){
        return "Computer Wins";
            }else{
                return "User Wins";
            }
}

if(userSelection === 'SCISSORS') {
    if (computerSelection === 'ROCK'){
        return "Computer Wins";
            }else{
                return "User Wins";
            }
}
};

// Prompting the user for input
prompt.start();
prompt.get(['userSelection'], function (err, result) {
    if (err) { return onErr(err); }
    
    const userSelection = result.userSelection.toUpperCase(); // Converting user input to uppercase
    const computerSelection = generateComputerSelection();
    
    console.log("User Selection:", userSelection);
    console.log("Computer Selection:", computerSelection);
    
    const outcome = determineWinner(userSelection, computerSelection);
    console.log("Outcome:", outcome);
});

// Error handler function
function onErr(err) {
    console.error(err);
    return 1;
}