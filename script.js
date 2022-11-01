function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3 );

        if (compChoice == 0){
            return "rock";
        }
        
        else if (compChoice==1){
            return "scissors";
        }
        
        return "paper";
    }

  
    function playRound(playerSelection, computerSelection) {
      if (playerSelection.toLowerCase()=="rock" && computerSelection == "scissors"){
        roundResult= "you win"
      }

     

      return roundResult;

        
      }

       
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));