function calculateMatchsticks() {
    const stepInput = document.getElementById('step');
    const resultElement = document.getElementById('result');

    const step = parseInt(stepInput.value, 10);

    if (isNaN(step) || step < 0) {
        resultElement.textContent = 'Please enter a valid non-negative integer.';
    } else {
        const matchsticks = matchHouses(step);
        resultElement.textContent = `Matchsticks: ${matchsticks}`;
    }
}

function matchHouses(step) {
    // The formula for matchsticks in each step is 5 * step + 1
    return 5 * step + 1;
}
