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
    let playerSelection;
    let computerSelection;
    let oppscore = 0;
    let userscore = 0;
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
             playerSelection = (button.className)
             game();
        })
    });

    function game(){
        computerSelection = GetComputerChoice();
        document.getElementById('container').innerHTML = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
        document.getElementById('display').innerHTML = round(playerSelection, computerSelection);  
        score();

    }
    function score(){
        if (round(playerSelection, computerSelection).startsWith('You win!')){
            ++userscore;
            document.getElementById('result').innerHTML = `Your score : ${userscore}   Opponent Score : ${oppscore}`
        }
        else if (round(playerSelection, computerSelection).startsWith('You lose!')){
            ++oppscore;
            document.getElementById('result').innerHTML = `Your score : ${userscore}   Opponent Score : ${oppscore}`
        }
        else{
            document.getElementById('result').innerHTML = `Your score : ${userscore}   Opponent Score : ${oppscore}`

        }


        if (userscore === 5){
            alert('You won the game');
            userscore = 0;
            oppscore = 0;
        }
        else if (oppscore === 5){
            alert('You lose the game');
            userscore = 0;
            oppscore = 0;
        }

    }
