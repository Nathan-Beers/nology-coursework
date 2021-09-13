// Clint Brief...
// Create an application which can be used to keep track
// of a score in a football match..

// 1. It's football there's two teams, so we need two scores
let teamScoreOne = 0;
let teamScoreTwo = 0;
let isGameStopped = false;
let winner = ""

// 2. When a team one button is clicked, increment team1 score
function handleTeamOneClick() {
    teamScoreOne = teamScoreOne + 1;
    document.getElementById("england").innerHTML = teamScoreOne;
}

// 3. When a team two button is clicked, increment team2 score
function handleTeamTwoClick() {
    teamScoreTwo = teamScoreTwo + 1;
    document.getElementById("france").innerHTML = teamScoreTwo;
}

// 4. When do we finish/stop?

    isGameStopped = true;

