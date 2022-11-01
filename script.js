function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3 );

        if (compChoice == 0){
            compChoice = "Rock";
        }
        else if (compChoice==1){
            compChoice= "Scissors";
        }
        else{
            compChoice= "Paper";
        }

       return compChoice;
    }

console.log(getComputerChoice());