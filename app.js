const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function getComputerChoice() {
	let compPick = choices[Math.floor(Math.random() * choices.length)];
	const compout = document.getElementById('comp');
	compout.value = compPick;
	return compPick;
}

function getPlayerChoice() {
	let playinput = document.getElementById('player').value;
	while (playinput == null) {
		let placeHolder = document.querySelector(input);
		placeHolder.style.placeholder = 'Type Something';
	}
	input = playinput.toLowerCase();
	let check = validateChoice(input);
	while (check == false) {
		placeHolder.placeholder = 'Type Something';
	}
	input = input.toLowerCase();
	check = validateChoice(input);
	return input;
}
function validateChoice(choice) {
	return choices.includes(choice);
}
// function game() {
// 	for (let i = 0; i < 5; i++) {
// 		singleRound();
// 	}
// 	logWins();
// }
function singleRound() {
	const playerChoice = getPlayerChoice();
	const compChoice = getComputerChoice();
	const winner = checkWinner(playerChoice, compChoice);
	console.log(winner);
	return winner;
}

function checkWinner(choiceP, choiceC) {
	if (choiceP === choiceC) {
		document.getElementById('gameRes').innerHTML = 'Tie';
	} else if (
		(choiceP === 'rock' && choiceC === 'scissors') ||
		(choiceP === 'scissors' && choiceC === 'paper') ||
		(choiceP === 'paper' && choiceC === 'rock')
	) {
		document.getElementById('gameRes').innerHTML = 'Player';
	} else {
		document.getElementById('gameRes').innerHTML = 'Computer';
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
