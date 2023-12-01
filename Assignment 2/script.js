function checkBonus() {
    const yourPositionInput = document.getElementById('yourPosition');
    const friendPositionInput = document.getElementById('friendPosition');
    const resultElement = document.getElementById('result');

    const yourPosition = parseInt(yourPositionInput.value, 10);
    const friendPosition = parseInt(friendPositionInput.value, 10);

    if (isNaN(yourPosition) || isNaN(friendPosition)) {
        resultElement.textContent = 'Please enter valid positions.';
    } else {
        const canEarnBonus = possibleBonus(yourPosition, friendPosition);
        resultElement.textContent = `Can Earn Bonus: ${canEarnBonus ? 'True' : 'Fasle'}`;
    }
}

function possibleBonus(yourPosition, friendPosition) {
    
    if (yourPosition === friendPosition) {
        return false;
    }

    const positionDifference = Math.abs(yourPosition - friendPosition);

    
    return positionDifference >= 1 && positionDifference <= 6;
}
