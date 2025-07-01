let secretNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        function checkGuess() {
            const guess = Number(document.getElementById('guessInput').value);
            const message = document.getElementById('message');
            attempts++;

            if (!guess || guess < 1 || guess > 100) {
                message.textContent = "Please enter a number between 1 and 100.";
                return;
            }

            if (guess === secretNumber) {
                message.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
                document.getElementById('guessInput').disabled = true;
            } else if (guess < secretNumber) {
                message.textContent = "Too low! Try again.";
            } else {
                message.textContent = "Too high! Try again.";
            }
        }

        function resetGame() {
            secretNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            document.getElementById('guessInput').value = '';
            document.getElementById('guessInput').disabled = false;
            document.getElementById('message').textContent = '';
        }