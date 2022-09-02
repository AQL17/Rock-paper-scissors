const choices = ['rock' , 'paper', 'scissors'];


function GetComputerChoice(){
    let randindex =Math.floor(Math.random()* choices.length);
    return choices[randindex]
}


function round(playerSelection , computerSelection){
    
    if (computerSelection === "rock" && playerSelection === "paper"){
        return ('You win! Paper beats Rock.')
    } else if( computerSelection === "paper" && playerSelection === "rock"){
        return ('You lose! paper beats rock.')
    }else if (computerSelection === "paper" && playerSelection === "scissors"){
        return('You win! scissors beats paper.')
    }else if (computerSelection === "scissors" && playerSelection === "paper"){
        return('You lose! Scissors beats paper.')
    }else if (computerSelection === "scissors" && playerSelection === "rock"){
        return('You win! rock beats scissors.')
    }else if (computerSelection === "rock" && playerSelection === "scissors"){
        return('You lose! rock beats scissors')
    }else{
        return "Draw";
    }
}


for(let i = 0; i < 5; i++){
    let computerSelection = GetComputerChoice();
let playerSelection = prompt("Enter");
console.log(playerSelection + ' vs ' + computerSelection)
    console.log(round(playerSelection, computerSelection));
}
