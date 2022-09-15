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
const rock = document.querySelector('#rock');
rock.onclick = () => {console.log('works')};
function game(){



    let computerSelection = GetComputerChoice();
    let playerSelection = prompt("Enter");
    console.log(playerSelection + ' vs ' + computerSelection)
    console.log(round(playerSelection, computerSelection));
    if (round(playerSelection,computerSelection).startsWith('You win!'))
    {

        console.log(`Your score : ${usernum}   Opponent Score : ${oppnum}` );
    }
    else if (round(playerSelection,computerSelection).startsWith('You lose!')){

        console.log(`Your score : ${usernum}   Opponent Score : ${oppnum}` );
    }else {
        console.log(`Your score : ${usernum}   Opponent Score : ${oppnum}` );
    }


}


