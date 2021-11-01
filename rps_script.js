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

for(let i = 0; i < 10; i++){
    console.log(playRound(getPlayerChoice(),getComputerChoice()));
}
