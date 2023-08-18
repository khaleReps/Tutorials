const prompt = require("prompt-sync")();

let currency = "ZAR ";

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter your deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

const getBet = (balance) => {
    while (true) {
        const bet = prompt("Enter your bet amount: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance) {
            console.log("Invalid bet amount, try again.");
        } else {
            return numberBet;
        }
    }
};

const chooseTeam = () => {
    while (true) {
        const team = prompt("Choose the team you want to bet on (Team A or Team B): ");
        if (team.toLowerCase() !== "team a" && team.toLowerCase() !== "team b") {
            console.log("Invalid team choice, try again.");
        } else {
            return team;
        }
    }
};

const game = () => {
    let balance = deposit();
    console.log(currency + balance);

    while (true) {
        console.log("Balance: " + currency + balance);
        const bet = getBet(balance);
        balance -= bet;

        const selectedTeam = chooseTeam();
        const winningTeam = Math.random() < 0.5 ? "team a" : "team b";

        console.log("Winning team: " + winningTeam);

        if (selectedTeam.toLowerCase() === winningTeam) {
            const winnings = bet * 2; // Double the bet for winning
            console.log("Congratulations! You won " + currency + winnings);
            balance += winnings;
        } else {
            console.log("Sorry, you lost your bet.");
        }

        console.log("Balance: " + currency + balance);

        if (balance <= 0) {
            console.log("You have insufficient funds.");
            break;
        }

        const playAgain = prompt("Do you want to play again? (y/n)");

        if (playAgain.toLowerCase() !== "y") break;
    }
};

game();
