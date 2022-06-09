let humanSubmission = window.prompt("Please choose Rock, Paper, or Scissors: ").toLowerCase();
while(humanSubmission !== "rock" && humanSubmission !== "paper" && humanSubmission !== "scissors"){
	humanSubmission = window.prompt("Your did not make a valid selection. Please try again: ").toLowerCase();
}

console.log(game(humanSubmission, computerPlay()));

function computerPlay(){
	let randomNum = Math.random() *3;
	if (randomNum < 1){
		return "rock";
	} else if (randomNum < 2){
		return "paper";
	} else return "scissors";
}

function game(humanPlay, computerPlay){
	let human = humanPlay;
	let computer = computerPlay;
	if (human === computer){
		return(`Draw! You played ${human}, and the computer played ${computer}.`);
	}
	else if (human === "rock"){
		if (computer === "paper"){
			return(`You lose! You played ${human}, and the computer played ${computer}.`);
		}
		else {
			return(`Victoire! You played ${human}, and the computer played ${computer}. A bien tot, ordinateur stupide!`);
		}
	}
	else if (human === "paper"){
		if (computer === "scissors"){
			return(`You lose! You played ${human}, and the computer played ${computer}.`);
		}
		else {
			return(`Victoire! You played ${human}, and the computer played ${computer}. A bien tot, ordinateur stupide!`);
		}
	}
	else if (human === "scissors"){
		if (computer === "rock"){
			return(`You lose! You played ${human}, and the computer played ${computer}.`);
		}
		else {
			return(`Victoire! You played ${human}, and the computer played ${computer}. A bien tot, ordinateur stupide!`);
		}
	}
}