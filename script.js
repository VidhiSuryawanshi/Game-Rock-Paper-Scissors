let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePar = document.querySelector("#user-score");
const compScorePar = document.querySelector("#com-score")

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
            // console.log("Choise was clicked", userchoice);
        playGame(userchoice);
    })
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game is Draw .");
    msg.innerText = "Game is Draw .Play Again!";
    msg.style.backgroundColor = "pink";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {

        msg.innerText = `You win..Your ${userChoice} beats ${compChoice}`;
        userScore++;
        userScorePar.innerText = userScore;
        msg.style.backgroundColor = "green";
    } else {
        msg.innerText = `You lose.. ${compChoice} beats Your ${userChoice}`;
        compScore++;
        compScorePar.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compChoise = genCompChoice();
    console.log("Computer choice =", compChoise);
    if (userchoice === compChoise) {
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compChoise === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compChoise === "scissor" ? true : false;
        } else {
            userWin = compChoise === "rock" ? false : true;
        }

        showWinner(userWin);
    }
}
