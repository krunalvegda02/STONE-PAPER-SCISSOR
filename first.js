let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#userScore");
const compScorepara = document.querySelector("#computerScore");

// Generate Computer Choice
const generateComputerChoice = () => {
     const options = ["rock", "paper", "scissor"];
     const randomeIndex = Math.floor(Math.random() * 3);
     return options[randomeIndex];
}

const drawGame = (userChoice) => {
        console.log("It's a Draw");
        msg.innerText = `it's a Draw 😕 You both selected ${userChoice}`;
        msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, computerChoice, userChoice) => {
    if(userWin){
        userScore++;
        console.log("You Win");
        msg.innerText = `Congratulations 🎉 Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        userScorepara.innerText = userScore; 
    }
    else{
        compScore++;
        console.log("You Lose");
         msg.innerText = `Oops 💀  ${computerChoice} beats ${userChoice}`;
         msg.style.backgroundColor = "red";
         compScorepara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    //Selecting Choices from user and computer
    console.log("User Choice:", userChoice);
    const computerChoice = generateComputerChoice();
    console.log("Computer Choice:", computerChoice);
    
    //Game Logic who wins
    if(userChoice === computerChoice){
        drawGame(userChoice);
    }
    else{
        let userWin = true;
        if(userChoice ==="rock"){
           // computr have 2 choices: scissor, paper
            userWin = computerChoice === "paper" ? false : true ;
        }
        else if(userChoice ==="paper"){
           //rock, scissor
           userWin = computerChoice === "scissor" ? false : true ;
        }
        else{
           //paper, rock
           userWin = "rock" ? false : true ;
        }
    showWinner(userWin, computerChoice, userChoice);
    }
}

// giving each div eventListerner 
choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

