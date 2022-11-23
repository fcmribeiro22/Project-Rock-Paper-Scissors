
let userScore = 0;
let computerScore= 0;
const mainContainer =document.querySelector('.container');
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')  
const outcomeDiv = document.querySelector('.outcome');
const scoreRecord = document.querySelector('.score');

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
                const p = document.createElement("p");
                p.innerText = "You win! Rock beats Scissors!";
                outcomeDiv.appendChild(p);
                

            }
            else if (playerSelection =="rock" && computerSelection === "paper"){
              computerScore++;
              const p = document.createElement("p");
              p.innerText =  "You lost! Paper beats Rock";
              outcomeDiv.appendChild(p);
            }
            else if (playerSelection =="scissors" && computerSelection == "rock"){
              computerScore++;
              const p = document.createElement("p");
              p.innerText =  "You lost! Rock beats Scissors!";
              outcomeDiv.appendChild(p);
            }
            else if (playerSelection =="scissors" && computerSelection == "paper"){
              userScore++;
              const p = document.createElement("p");
              p.innerText =  "You win! Scissors beats Paper";
              outcomeDiv.appendChild(p);
            }
      
            else if (playerSelection =="paper" && computerSelection == "rock"){
              userScore++;
              const p = document.createElement("p");
              p.innerText =  "You win! Paper beats Rock!";
              outcomeDiv.appendChild(p);
            }
      
            else if (playerSelection =="paper" && computerSelection == "scissors"){
              computerScore++;
              const p = document.createElement("p");
              p.innerText =  "You lost! Scissors beats Paper";
              outcomeDiv.appendChild(p);

            }


            else {
              const p = document.createElement("p");
              p.innerText =  "I'ts a draw!"
              outcomeDiv.appendChild(p);

            }


            }

  const getWinner =(userScore,computerScore) => {
    
    if(userScore === 5){
      const h3 = document.createElement("h3");
      h3.innerText  = "You won!";
      mainContainer.appendChild(h3)
      


    }

    if (computerScore === 5){

      const h3 = document.createElement("h3");
      h3.innerText  = "Computer Won";
      mainContainer.appendChild(h3)

    }


    }
  
   


  rockButton.addEventListener('click', () =>{
    const playerSelection = 'rock';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    getWinner(userScore,computerScore);
   
  })


  paperButton.addEventListener('click', () =>{
    const playerSelection = 'paper';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    
  })


  scissorsButton.addEventListener('click', () =>{
    const playerSelection = 'scissors';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    
  })









  
   

