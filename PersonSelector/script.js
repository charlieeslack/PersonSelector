function selectGame(game) {
    if (game === 'Random') {
        document.querySelector('.container').style.display = 'none';
        document.getElementById('playerInputForm').style.display = 'block';
        createPlayerInputs();
    } else {
        alert("You selected " + game + "!");
    }
}

function createPlayerInputs() {
    const numPlayers = document.getElementById('numPlayers').value;
    const playerInputsDiv = document.getElementById('playerInputs');
    playerInputsDiv.innerHTML = '';

    for (let i = 1; i <= numPlayers; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Player ' + i + ' Name';
        input.className = 'player-name';
        input.id = 'player' + i;
        playerInputsDiv.appendChild(input);
    }
}

function randomPlayerGame() {
    const numPlayers = document.getElementById('numPlayers').value;
    let playerNames = [];
    for (let i = 1; i <= numPlayers; i++) {
        const playerName = document.getElementById('player' + i).value;
        if (playerName) {
            playerNames.push(playerName);
        } else {
            alert('Please enter a name for Player ' + i);
            return;
        }
    }

    const randomPlayer = playerNames[Math.floor(Math.random() * playerNames.length)];
    document.getElementById('randomPlayerName').innerText = 'Randomly selected player: ' + randomPlayer;
    document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function goBack() {
    document.getElementById('playerInputForm').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
}
