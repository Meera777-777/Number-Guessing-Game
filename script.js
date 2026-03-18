let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {

    let guess = document.getElementById("guessInput").value;
    let result = document.getElementById("result");

    if (guess == secretNumber) {
        result.textContent = "Correct! You guessed the number!";
    }

    else if (guess < secretNumber) {
        result.textContent = "Too low! Try again.";
    }

    else {
        result.textContent = "Too high! Try again.";
    }

}
