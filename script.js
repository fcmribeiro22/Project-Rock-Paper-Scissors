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

   
    

function game(){

        let userScore = 0;
        let computerScore= 0;
        
    
        for (i = 0; i < 5; i++) {
            const computerSelection = getComputerChoice().toLowerCase();
            const playerSelection = prompt("Choose Your Weapon", "Rock, Paper, Scissors");
            console.log(playerSelection)
            console.log(computerSelection)
            console.log(playRound(playerSelection, computerSelection));
            console.log("Round Number: " + (i + 1))
            console.log("Player Win Totals " + userScore);
            console.log("Computer Win Totals " + computerScore);

        function playRound(playerSelection, computerSelection) {
    
            if (playerSelection.toLowerCase() === computerSelection) {
                  roundResult= "It's a draw!";
            }
            else if (playerSelection.toLowerCase()=="rock" && computerSelection == "scissors"){
              roundResult= "You win! Rock beats Scissors";
              userScore++;

            }
            else if (playerSelection.toLowerCase()=="rock" && computerSelection == "paper"){
              roundResult= "You lost! Paper beats Rock";
              computerScore++;
            }
            else if (playerSelection.toLowerCase()=="scissors" && computerSelection == "rock"){
              roundResult= "You lost! Rock beats Scissors!";
              computerScore++;
            }
            else if (playerSelection.toLowerCase()=="scissors" && computerSelection == "paper"){
              roundResult= "You win! Scissors beats Paper";
              userScore++;
            }
      
            else if (playerSelection.toLowerCase()=="paper" && computerSelection == "rock"){
              roundResult= "You win! Paper beats Rock!";
              userScore++;
            }
      
            else if (playerSelection.toLowerCase()=="paper" && computerSelection == "scissors"){
              roundResult= "You lost! Scissors beats Paper";
              computerScore++;
            }

            else{
                roundResult= "Not a order";
                i = i -1 ;
                
            }
           
            return roundResult;
      
              
            }


        }

        if (userScore > computerScore){
            console.log("You won!");
        }

        else if(userScore === computerScore){
            console.log("It's a draw!");
        }

        else{
            console.log("You loose");
        }
  
    }

   game()  ;
         
  










  
   

