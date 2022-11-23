
let userScore = 0;
let computerScore= 0;
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')  


const computerPlay = () => {
    let compChoice = Math.floor(Math.random() * 3 );

        if (compChoice == 0){
            compPlay= "rock";
        }
        
        else if (compChoice==1){
            compPlay= "scissors";
        }
        
        else{
            compPlay="paper";
        } 

        return compPlay;
    }
  
    
const playRound = (playerSelection, computerSelection) => {
    

            if (playerSelection === "rock" && computerSelection === "scissors"){
                userScore++;
                return "You win! Rock beats Scissors";

            }
            else if (playerSelection =="rock" && computerSelection === "paper"){
              computerScore++;
                return "You lost! Paper beats Rock";
            }
            else if (playerSelection =="scissors" && computerSelection == "rock"){
              computerScore++;
              return "You lost! Rock beats Scissors!";
            }
            else if (playerSelection =="scissors" && computerSelection == "paper"){
              userScore++;
              return "You win! Scissors beats Paper";
            }
      
            else if (playerSelection =="paper" && computerSelection == "rock"){
              userScore++;
              return "You win! Paper beats Rock!";
            }
      
            else if (playerSelection =="paper" && computerSelection == "scissors"){
              computerScore++;
              return "You lost! Scissors beats Paper";
            }


            else return "It's a draaw"


            }
   


  rockButton.addEventListener('click', () =>{
    const playerSelection = 'rock';
    const computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log(userScore);
    console.log(computerScore);
  })


  paperButton.addEventListener('click', () =>{
    const playerSelection = 'paper';
    const computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    
  })


  scissorsButton.addEventListener('click', () =>{
    const playerSelection = 'scissors';
    const computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    
  })









  
   

