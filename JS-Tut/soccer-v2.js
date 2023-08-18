/*
Common types of sports bets that people often place:

Moneyline Bet: This is a straightforward bet on which team or player will win the game or match.

Point Spread Bet: In this type of bet, a point spread is applied to the favored team to even out the odds. The bettor chooses whether the favored team will win by more points than the spread or the underdog will lose by fewer points than the spread.

Over/Under (Total) Bet: Also known as a totals bet, this involves betting on whether the total combined score of both teams in a game will be over or under a certain predetermined number.

Proposition (Prop) Bet: These are bets on specific events or outcomes within a game, such as which player will score the first goal, how many touchdowns a certain player will make, or whether a specific event will occur during the game.

Parlay Bet: This involves combining multiple bets into a single bet. All of the chosen bets must be correct for the parlay to win. It offers higher potential payouts but is riskier due to its dependence on all selections being accurate.

Teaser Bet: Similar to a parlay, a teaser allows the bettor to adjust the point spread or totals line to their advantage. However, this also decreases the potential payout.

Futures Bet: These are bets placed on events that will happen in the future, such as betting on which team will win the championship before the season even starts.

Round Robin Bet: A round robin is a series of parlay bets involving all possible combinations of a set of selections. This bet type offers more flexibility and increased chances of winning at least some portion of the bet.

Asian Handicap Bet: Commonly used in soccer, Asian handicaps involve adjusting the point spread to eliminate the possibility of a tie. It offers more options to bettors by using half-points to ensure there's a winner.

Live (In-Play) Betting: This involves placing bets on games or matches that are already in progress. The odds change in real-time as the game unfolds.

Spread Betting: A form of betting that involves wagering not only on whether a team will win or lose, but also by how much they will win or lose.

Each-Way Bet: Often used in horse racing or golf, an each-way bet is essentially two bets: one on the selection to win and one on the selection to "place" (usually top 2, 3, or 4, depending on the event).

First Goal/Scorer Bet: Betting on which player will score the first goal in a soccer match or the first points in other sports.common types of sports bets that people often place:

Moneyline Bet: This is a straightforward bet on which team or player will win the game or match.

Point Spread Bet: In this type of bet, a point spread is applied to the favored team to even out the odds. The bettor chooses whether the favored team will win by more points than the spread or the underdog will lose by fewer points than the spread.

Over/Under (Total) Bet: Also known as a totals bet, this involves betting on whether the total combined score of both teams in a game will be over or under a certain predetermined number.

Proposition (Prop) Bet: These are bets on specific events or outcomes within a game, such as which player will score the first goal, how many touchdowns a certain player will make, or whether a specific event will occur during the game.

Parlay Bet: This involves combining multiple bets into a single bet. All of the chosen bets must be correct for the parlay to win. It offers higher potential payouts but is riskier due to its dependence on all selections being accurate.

Teaser Bet: Similar to a parlay, a teaser allows the bettor to adjust the point spread or totals line to their advantage. However, this also decreases the potential payout.

Futures Bet: These are bets placed on events that will happen in the future, such as betting on which team will win the championship before the season even starts.

Round Robin Bet: A round robin is a series of parlay bets involving all possible combinations of a set of selections. This bet type offers more flexibility and increased chances of winning at least some portion of the bet.

Asian Handicap Bet: Commonly used in soccer, Asian handicaps involve adjusting the point spread to eliminate the possibility of a tie. It offers more options to bettors by using half-points to ensure there's a winner.

Live (In-Play) Betting: This involves placing bets on games or matches that are already in progress. The odds change in real-time as the game unfolds.

Spread Betting: A form of betting that involves wagering not only on whether a team will win or lose, but also by how much they will win or lose.

Each-Way Bet: Often used in horse racing or golf, an each-way bet is essentially two bets: one on the selection to win and one on the selection to "place" (usually top 2, 3, or 4, depending on the event).

First Goal/Scorer Bet: Betting on which player will score the first goal in a soccer match or the first points in other sports.
*/



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
        if (team.toLowerCase() !== "team a" && team.toLowerCase() !== "a" && team.toLowerCase() !== "team b" && team.toLowerCase() !== "b") {
            console.log("Invalid team choice, try again.");
        } else {
            return team;
        }
    }
};

const chooseBetType = () => {
    while (true) {
        console.log("Available Bet Types:");
        console.log("1. Moneyline Bet");
        console.log("2. Point Spread Bet");
        console.log("3. Over/Under Bet");
        console.log("4. Proposition (Prop) Bet");
        console.log("5. Parlay Bet");
        console.log("6. Teaser Bet");
        console.log("7. Futures Bet");
        console.log("8. Round Robin Bet");
        console.log("9. Asian Handicap Bet");
        console.log("10. Live (In-Play) Betting");
        console.log("11. Spread Betting");
        console.log("12. Each-Way Bet");
        console.log("13. First Goal/Scorer Bet");

        const choice = prompt("Choose a bet type (1-13): ");
        if (choice >= "1" | 1 && choice <= "13" | 13) {
            return choice;
        } else {
            console.log("Invalid choice, try again.");
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

        const selectedBetType = chooseBetType();
        const selectedTeam = chooseTeam();
        const winningTeam = Math.random() < 0.5 ? "team a" : "team b";

        console.log("Winning team: " + winningTeam);

        if (selectedBetType === "1") {
            // Money Line Bet logic
            if (selectedTeam.toLowerCase() === winningTeam) {
                const winnings = bet * 2;
                console.log("Congratulations! You won " + currency + winnings);
                balance += winnings;
            } else {
                console.log("Sorry, you lost your bet.");
            }
        } else if (selectedBetType === "2") {
            // Point Spread Bet logic
            const spread = prompt("Enter the point spread: ");
            const spreadAmount = parseFloat(spread);

            if (isNaN(spreadAmount)) {
                console.log("Invalid spread amount.");
            } else {
                // Implement point spread comparison and result determination
                // For example, check if the selectedTeam wins by more points than the spread
                if (selectedTeam.toLowerCase() === winningTeam && spreadAmount >= 0) {
                    const winnings = bet * 2;
                    console.log("Congratulations! You won " + currency + winnings);
                    balance += winnings;
                } else if (selectedTeam.toLowerCase() !== winningTeam && spreadAmount < 0) {
                    const winnings = bet * 2;
                    console.log("Congratulations! You won " + currency + winnings);
                    balance += winnings;
                } else {
                    console.log("Sorry, you lost your bet.");
                }
            }
        
        } else if (selectedBetType === "3") {
            // Over/under logic
            const total = prompt("Enter the total points: ");
            const totalPoints = parseFloat(total);

            if (isNaN(totalPoints)) {
                console.log("Invalid total points.");
            } else {
             
                // For example, check if the total combined score is over or under the specified total
                const totalScore = /* Calculate total score from the game */;
                if (totalScore > totalPoints) {
                    const winnings = bet * 2;
                    console.log("Congratulations! You won " + currency + winnings);
                    balance += winnings;
                } else {
                    console.log("Sorry, you lost your bet.");
                }
            }
        } else if (selectedBetType === "4") {
            // Proposition (Prop) Bet logic
            console.log("Enter your proposition bet:");
            const proposition = prompt("For example: Who will score the first goal?");
            const outcome = prompt("Enter the outcome you're betting on: ");

            // Implement proposition outcome comparison and result determination
            if (/* Check if the actual outcome matches the bet outcome */) {
                const winnings = bet * 5; // Example multiplier
                console.log("Congratulations! You won " + currency + winnings);
                balance += winnings;
            } else {
                console.log("Sorry, you lost your bet.");
            }

        } else if (selectedBetType === "5") {
            console.log("Enter multiple bets for your parlay:");
            const numberOfBets = prompt("Enter the number of bets: ");
            const bets = [];

            for (let i = 0; i < numberOfBets; i++) {
                const betAmount = prompt("Enter bet amount for bet " + (i + 1) + ": ");
                bets.push(parseFloat(betAmount));
            }

            // Implement parlay calculation and result determination
            const parlayMultiplier = 3; // Example multiplier
            const totalParlayBet = bets.reduce((total, bet) => total + bet, 0);

            if (/* Check if all bets are successful */) {
                const winnings = totalParlayBet * parlayMultiplier;
                console.log("Congratulations! You won " + currency + winnings);
                balance += winnings;
            } else {
                console.log("Sorry, you lost your parlay bet.");
            }
        } else if (selectedBetType === "6") {
            // Implement teaser bet logic here
            console.log("Teaser Bet logic to be implemented.");
        } else if (selectedBetType === "7") {
            // Implement futures bet logic here
            console.log("Futures Bet logic to be implemented.");
        } else if (selectedBetType === "8") {
            // Implement round robin bet logic here
            console.log("Round Robin Bet logic to be implemented.");
        } else if (selectedBetType === "9") {
            // Implement Asian handicap bet logic here
            console.log("Asian Handicap Bet logic to be implemented.");
        } else if (selectedBetType === "10") {
            // Implement live betting logic here
            console.log("Live (In-Play) Betting logic to be implemented.");
        } else if (selectedBetType === "11") {
            // Implement spread betting logic here
            console.log("Spread Betting logic to be implemented.");
        } else if (selectedBetType === "12") {
            // Implement each-way bet logic here
            console.log("Each-Way Bet logic to be implemented.");
        } else if (selectedBetType === "13") {
            // Implement first goal/scorer bet logic here
            console.log("First Goal/Scorer Bet logic to be implemented.");
        } else {
            console.log("Invalid choice, try again.");
        }

        console.log("Balance: " + currency + balance);

        if (balance <= 0) {
            console.log("You have insufficient funds.");
            break;
        }

        const playAgain = prompt("Do you want to play again? (y/n)");

        if (playAgain.toLowerCase() !== "y" | "yes") break;
    }
};

game();

