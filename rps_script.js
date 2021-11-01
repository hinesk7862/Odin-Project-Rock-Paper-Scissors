const winCondtions = {
    PLAYER: 1,
    COMPUTER: 2,
    TIE: 0,
}

function getComputerChoice(){
    let randomPlay = Math.random();
    if(randomPlay < .33){
        console.log("I played rock");
        return "rock";
    }
    else if(randomPlay > .33 && randomPlay < .66){
        console.log("I played paper");
        return "paper";
    }
    else{
        console.log("I played scissors");
        return "scissors";
    }

}

function getPlayerChoice(){
    let playerDecision = prompt("What would you like to play? (Rock, paper, or scissors): ");
    playerDecision = playerDecision.toLowerCase();
    while(playerDecision != "paper" && playerDecision != "rock" && playerDecision != "scissors"){
        console.log(playerDecision);
        console.log("I'm sorry, that is unrecognized. Please try again.")
        playerDecision = prompt("What would you like to play? (Rock, paper, or scissors): ");
        playerDecision = playerDecision.toLowerCase();
    }
    return playerDecision;
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(playerChoice == "rock"){
        if(computerChoice == "rock"){
            return winCondtions.TIE;
        }
        else if(computerChoice == "paper"){
            return winCondtions.COMPUTER;
        }
        else if(computerChoice == "scissors"){
            return winCondtions.PLAYER;
        }
        else{
            console.log("error");
        }
    }
    else if(playerChoice == "paper"){
        if(computerChoice == "rock"){
            return winCondtions.PLAYER;
        }
        else if(computerChoice == "paper"){
            return winCondtions.TIE;
        }
        else if(computerChoice == "scissors"){
            return winCondtions.COMPUTER;
        }
        else{
            console.log("error");
        }
    }
    else if(playerChoice == "scissors"){
        if(computerChoice == "rock"){
            return winCondtions.COMPUTER;
        }
        else if(computerChoice == "paper"){
            return winCondtions.PLAYER;
        }
        else if(computerChoice == "scissors"){
            return winCondtions.TIE;
        }
        else{
            console.log("error");
        }
    }
    else{
        console.log("error");
    }
}

function game(){
    let playerWinCount = 0;
    let computerWinCount = 0;

    let outcome = 0;

    for(let i = 0; i < 5; i++){
        outcome = playRound(getPlayerChoice(), getComputerChoice());
        if(outcome == winCondtions.PLAYER){
            console.log("The Player won this round");
            playerWinCount++;
        }
        else if(outcome == winCondtions.COMPUTER){
            console.log("The computer won this round");
            computerWinCount++;
        }
        else{
            console.log("This round was a tie");
        }
    }
    if(playerWinCount >= 3){
        console.log("The player has won the game by reaching a score of three!");
    }
    else if(computerWinCount >= 3){
        console.log("The computer has won the game by reaching a score of three!");
    }   
    else{
        console.log("Nobody won!");
    }
}

game();
