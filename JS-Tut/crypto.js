const prompt = require("prompt-sync")();

let currency = "USD ";

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
        const tradeAmount = prompt("Enter your trade amount (in " + currency + " ): ");
        const numberTradeAmount = parseFloat(tradeAmount);

        if (isNaN(numberTradeAmount) || numberTradeAmount <= 0 || numberTradeAmount > balance) {
            console.log("Invalid trade amount, try again.");
        } else {
            return numberTradeAmount;
        }
    }
};

const chooseCryptocurrency = () => {
    while (true) {
        const cryptocurrency = prompt("Choose the cryptocurrency you want to trade (e.g., BTC, ETH): ");
        // You can add more validation for cryptocurrency format if needed
        return cryptocurrency;
    }
};

const trade = () => {
    let balance = deposit();
    let openTrade = null;

    console.log(currency + balance);

    while (true) {
        console.log("Balance: " + currency + balance);

        if (!openTrade) {
            const tradeAmount = getTradeAmount(balance);
            balance -= tradeAmount;

            const selectedCryptocurrency = chooseCryptocurrency();
            const stopLoss = parseFloat(prompt("Set stop loss price: "));
            const takeProfit = parseFloat(prompt("Set take profit price: "));

            openTrade = {
                cryptocurrency: selectedCryptocurrency,
                tradeAmount: tradeAmount,
                entryPrice: Math.random() * 10000 + 100, // Placeholder entry price for illustration
                stopLoss: stopLoss,
                takeProfit: takeProfit,
            };

            console.log("Trade placed:", openTrade);
        }

        // Simulate trade progress - Update openTrade status, e.g., based on market data
        if (openTrade) {
            openTrade.entryPrice += (Math.random() - 0.5) * 10; // Simulate price movement
            console.log("Trade status:", openTrade);

            if (openTrade.entryPrice <= openTrade.stopLoss) {
                console.log("Stop loss triggered!");
                balance += openTrade.tradeAmount;
                openTrade = null;
            } else if (openTrade.entryPrice >= openTrade.takeProfit) {
                console.log("Take profit triggered!");
                balance += openTrade.tradeAmount;
                openTrade = null;
            }
        }

        const continueTrading = prompt("Do you want to continue trading? (y/n)");

        if (continueTrading.toLowerCase() !== "y") {
            if (openTrade) {
                const stayInTrade = prompt("Do you want to continue monitoring the open trade? (y/n)");
                if (stayInTrade.toLowerCase() !== "y") break;
            } else {
                break;
            }
        }
    }
};

trade();
