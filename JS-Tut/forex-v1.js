const prompt = require("prompt-sync")();

let currency = "USD "; // Use USD as the base currency

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter your initial deposit amount (in USD): ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

const getTradeAmount = (balance) => {
    while (true) {
        const tradeAmount = prompt("Enter your trade amount (in USD): ");
        const numberTradeAmount = parseFloat(tradeAmount);

        if (isNaN(numberTradeAmount) || numberTradeAmount <= 0 || numberTradeAmount > balance) {
            console.log("Invalid trade amount, try again.");
        } else {
            return numberTradeAmount;
        }
    }
};

const chooseCurrencyPair = () => {
    while (true) {
        const currencyPair = prompt("Choose the currency pair you want to trade (e.g., EUR/USD, GBP/JPY): ");
        // You can add more validation for currency pair format if needed
        return currencyPair;
    }
};

const trade = () => {
    let balance = deposit();
    console.log(currency + balance);

    while (true) {
        console.log("Balance: " + currency + balance);
        const tradeAmount = getTradeAmount(balance);
        balance -= tradeAmount;

        const selectedCurrencyPair = chooseCurrencyPair();
        const isProfitable = Math.random() < 0.5; // Assume 50% chance of profitable trade

        console.log("Trade result: " + (isProfitable ? "Profit" : "Loss"));

        if (isProfitable) {
            const profit = tradeAmount * (Math.random() * 0.2 + 0.8); // Profit between 80% to 100%
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
