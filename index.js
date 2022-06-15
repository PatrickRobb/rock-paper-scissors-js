// let humanSubmission = window.prompt("Please choose Rock, Paper, or Scissors: ").toLowerCase();
// while(humanSubmission !== "rock" && humanSubmission !== "paper" && humanSubmission !== "scissors"){
// 	humanSubmission = window.prompt("Your did not make a valid selection. Please try again: ").toLowerCase();
// }

let playerScore = 0;
let computerScore = 0;

const score = document.createElement('h1');
const body = document.querySelector('body')
body.appendChild(score);

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', (e) => {
	game(e.target.textContent);
});	

paper.addEventListener('click', (e) => {
	game(e.target.textContent);
});

scissors.addEventListener('click', (e) => {
	game(e.target.textContent);
});

function computerPlay(){
	let randomNum = Math.random() *3;
	if (randomNum < 1){
		return "Rock";
	} else if (randomNum < 2){
		return "Paper";
	} else return "Scissors";
}

function game(humanPlay){
	let human = humanPlay;
	let computer = computerPlay();
	if (human === computer){
		score.textContent = `Draw! You played ${human}, and the computer played ${computer}. The score is computer: 
		${computerScore} and player: ${playerScore}`;
	}
	else if (human === "Rock"){
		if (computer === "Paper"){
			computerScore++;
			winCondition();
			score.textContent = `You lose! You played ${human}, and the computer played ${computer}. The score is computer: 
			${computerScore} and player: ${playerScore}`;
		}
		else {
			playerScore++;
			winCondition();
			score.textContent = `Victoire! You played ${human}, and the computer played ${computer}. A bien tot, ordinateur stupide! The score is computer: 
			${computerScore} and player: ${playerScore}`;
		}
	}
	else if (human === "Paper"){
		if (computer === "Scissors"){
			computerScore++;
			winCondition();
			score.textContent = `You lose! You played ${human}, and the computer played ${computer}. The score is computer: 
			${computerScore} and player: ${playerScore}`;
		}
		else {
			playerScore++;
			winCondition();
			score.textContent = `Victoire! You played ${human}, and the computer played ${computer}. A bien tot, ordinateur stupide! The score is computer: 
			${computerScore} and player: ${playerScore}`;
		}
	}
	else if (human === "Scissors"){
		if (computer === "Rock"){
			computerScore++;
			winCondition();
			score.textContent = `You lose! You played ${human}, and the computer played ${computer}. The score is computer: 
			${computerScore} and player: ${playerScore}`;
		}
		else {
			playerScore++;
			winCondition();
			score.textContent = `Victoire! You played ${human}, and the computer played ${computer}. A bien tot, ordinateur stupide! The score is computer: 
			${computerScore} and player: ${playerScore}`;
		}
	}
}

function winCondition(){
	if (playerScore >= 5) alert("Human player wins!!!");
	else if (computerScore >= 5) alert ("Computer player wins!!!");
}