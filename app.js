function getComputerChoice() {
	let num = Math.floor(Math.random() * 9) + 1;
	if (num <= 3) {
		return 'Rock!';
	} else if (num > 3 && num <= 6) {
		return 'Paper!';
	} else {
		return 'Scissors!';
	}
}
