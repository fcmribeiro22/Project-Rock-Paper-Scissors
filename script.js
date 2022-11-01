function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3 );

        if (compChoice == 0){
            compPlay= "ROck";
        }
        
        else if (compChoice==1){
            compPlay= "SCIssors";
        }
        
        else{
            compPlay="PAper";
        } 

        return compPlay;
    }

  
    function playRound(playerSelection, computerSelection) {

      if (playerSelection.toLowerCase() === computerSelection) {
            roundResult= "It's a draw!";
      }
      else if (playerSelection.toLowerCase()=="rock" && computerSelection == "scissors"){
        roundResult= "You win! Rock beats Scissors";
      }
      else if (playerSelection.toLowerCase()=="rock" && computerSelection == "paper"){
        roundResult= "You lost! Paper beats Rock";
      }
      else if (playerSelection.toLowerCase()=="Scissors" && computerSelection == "rock"){
        roundResult= "You lost! Rock beats Scissors!";
      }
      else if (playerSelection.toLowerCase()=="Scissors" && computerSelection == "paper"){
        roundResult= "You win! Scissors beats Paper";
      }

      else if (playerSelection.toLowerCase()=="Paper" && computerSelection == "rock"){
        roundResult= "You win! Paper beats Rock!";
      }

      else if (playerSelection.toLowerCase()=="Paper" && computerSelection == "scissors"){
        roundResult= "You lost! Scissors beats Paper";
      }
     
      return roundResult;

        
      }

       
const playerSelection = "Rock";
const computerSelection = getComputerChoice().toLowerCase();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));