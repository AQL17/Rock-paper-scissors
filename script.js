const choices = ['rock' , 'paper', 'scissors'];


function GetComputerChoice(){
    let randindex =Math.floor(Math.random()* choices.length);
    return choices[randindex]
}
