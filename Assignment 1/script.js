function calculateSteps() {
    const discsInput = document.getElementById('discs');
    const resultElement = document.getElementById('result');

    const discs = parseInt(discsInput.value, 10);

    if (isNaN(discs) || discs < 1) {
        resultElement.textContent = 'Please enter a valid positive integer.';
    } else {
        const steps = towerHanoi(discs);
        resultElement.textContent = `Minimum steps needed: ${steps}`;
    }
}

function towerHanoi(discs) {
    
    return Math.pow(2, discs) - 1;
}
