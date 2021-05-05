const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];

function runGame() {
    let guess = '';
    let correct = false;
    const targetIndex = Math.floor(Math.random() *COLORS_ARRAY.length);
    const target =COLORS_ARRAY[targetIndex];
    console.log(target);
    do {
        guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY +
        '\n\nWhat color am I thinking of?\n');
        if (guess === null) {
            alert('Game Is Over');
            return;
        }
            correct = checkGuess(guess, target);
            
    } while (!correct);
    alert("Congratulations You Win");
    document.body.style.background = guess;
}
function checkGuess(guess, target)  {
    
    let correct = false;
    if (!COLORS_ARRAY.includes(guess)) {
        alert('The color you have selected is incorrect.')
    } else if (guess > target) {
        alert('Guess is higher than the target')
    } else if (guess < target) {
        alert('Guess is lower than the target')
    } else {
        correct = true;
    } 
    return correct; 
    
}