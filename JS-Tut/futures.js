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

const getContractAmount = (balance) => {
    while (true) {
        const contractAmount = prompt("Enter the number of contracts to trade: ");
        const numberContractAmount = parseFloat(contractAmount);

        if (isNaN(numberContractAmount) || numberContractAmount <= 0 || numberContractAmount > balance) {
            console.log("Invalid contract amount, try again.");
        } else {
            return numberContractAmount;
        }
    }
};

const chooseFuturesContract = () => {
    while (true) {
        const futuresContract = prompt("Choose the futures contract (e.g., ES, CL, GC): ");
        // You can add more validation for futures contracts if needed
        return futuresContract;
    }
};

const trade = () => {
    let balance = deposit();
    let openTrade = null;

    console.log(currency + balance);

    while (true) {
        console.log("Balance: " + currency + balance);

        if (!openTrade) {
            const contractAmount = getContractAmount(balance);
            balance -= contractAmount;

            const selectedContract = chooseFuturesContract();
            const entryPrice = Math.random() * 1000 + 2000; // Placeholder entry price

            openTrade = {
                futuresContract: selectedContract,
                contractAmount: contractAmount,
                entryPrice: entryPrice,
                isTradeClosed: false,
            };

            console.log("Trade placed:", openTrade);
        }

        // Simulate trade progress - Update openTrade status, e.g., based on market data
        if (openTrade && !openTrade.isTradeClosed) {
            openTrade.entryPrice += (Math.random() - 0.5) * 10; // Simulate price movement
            console.log("Trade status:", openTrade);

            // Simulate trade closure based on price movement
            if (Math.random() < 0.1) { // 10% chance of trade closing
                const exitPrice = openTrade.entryPrice + (Math.random() - 0.5) * 20;
                const profitLoss = (exitPrice - openTrade.entryPrice) * openTrade.contractAmount;
                console.log(`Trade closed. Exit price: ${exitPrice.toFixed(2)} | Profit/Loss: ${currency}${profitLoss.toFixed(2)}`);
                balance += profitLoss;
                openTrade.isTradeClosed = true;
            }
        }

        const continueTrading = prompt("Do you want to continue trading? (y/n)");

        if (continueTrading.toLowerCase() !== "y") {
            if (openTrade && !openTrade.isTradeClosed) {
                const stayInTrade = prompt("Do you want to continue monitoring the open trade? (y/n)");
                if (stayInTrade.toLowerCase() !== "y") break;
            } else {
                break;
            }
        }
    }
};

trade();
