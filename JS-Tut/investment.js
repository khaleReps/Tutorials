const prompt = require("prompt-sync")();

let currency = "ZAR "; // Use ZAR as the base currency

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter your initial deposit amount (in ZAR): ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

const getInvestmentAmount = (balance) => {
    while (true) {
        const investmentAmount = prompt("Enter your investment amount (in ZAR): ");
        const numberInvestmentAmount = parseFloat(investmentAmount);

        if (isNaN(numberInvestmentAmount) || numberInvestmentAmount <= 0 || numberInvestmentAmount > balance) {
            console.log("Invalid investment amount, try again.");
        } else {
            return numberInvestmentAmount;
        }
    }
};

const chooseStock = () => {
    const availableStocks = ["AAPL", "GOOGL", "AMZN", "TSLA"]; // Simulated list of available stocks
    while (true) {
        const selectedStock = prompt("Choose the stock you want to invest in (e.g., AAPL, GOOGL): ");
        if (!availableStocks.includes(selectedStock)) {
            console.log("Invalid stock choice, try again.");
        } else {
            return selectedStock;
        }
    }
};

const trade = () => {
    let balance = deposit();
    console.log(currency + balance);

    while (true) {
        console.log("Balance: " + currency + balance);
        const investmentAmount = getInvestmentAmount(balance);
        balance -= investmentAmount;

        const selectedStock = chooseStock();
        const isProfitable = Math.random() < 0.5; // Assume 50% chance of profitable trade

        console.log("Trade result: " + (isProfitable ? "Profit" : "Loss"));

        if (isProfitable) {
            const profit = investmentAmount * (Math.random() * 0.2 + 0.8); // Profit between 80% to 100%
            console.log("Congratulations! You made a profit of " + currency + profit);
            balance += profit;
        } else {
            console.log("Oops, you experienced a loss.");
        }

        console.log("Balance: " + currency + balance);

        if (balance <= 0) {
            console.log("You have depleted your funds.");
            break;
        }

        const continueTrading = prompt("Do you want to continue trading? (y/n)");

        if (continueTrading.toLowerCase() !== "y") break;
    }
};

trade();
