const choices = ['rock', 'paper', 'scissors'];
const winners = [];
function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
	console.log(com);
}

function getPlayerChoice() {
	let input = prompt('Type Rock, Paper, or Scissors');
	while (input == null) {
		input = prompt('Type Rock, Paper, or Scissors');
	}
	input = input.toLowerCase();
	let check = validateChoice(input);
	while (check == false) {
		input = prompt('Type Rock, Paper, or Scissors');
		while (input == null) {
			input = prompt('Type Rock, Paper, or Scissors');
		}
		input = input.toLowerCase();
		check = validateChoice(input);
	}
	return input;
}
function validateChoice(choice) {
	return choices.includes(choice);
}
function game() {
	for (let i = 0; i < 5; i++) {
		singleRound();
	}
	logWins();
}
function singleRound() {
	const playerChoice = getPlayerChoice();
	const compChoice = getComputerChoice();
	const winner = checkWinner(playerChoice, compChoice);
	winners.push(winner);
}

function checkWinner(choiceP, choiceC) {
	if (choiceP === choiceC) {
		return 'Tie';
	} else if (
		(choiceP === 'rock' && choiceC === 'scissors') ||
		(choiceP === 'scissors' && choiceC === 'paper') ||
		(choiceP === 'paper' && choiceC === 'rock')
	) {
		return 'Player';
	} else {
		return 'Computer';
	}
}
function logWins() {
	let playerWins = winners.filter((item) => item == 'Player');
	let computerWins = winners.filter((item) => item == 'Computer');
	let ties = winners.filter((item) => item == 'Tie');
	console.log('Results!!');
	console.log(`Player won ${playerWins.length} times!!`);
	console.log(`Computer won ${computerWins.length} times!!`);
	console.log(`Tied the game ${ties.length} times!!`);
}
