const prompt = require("prompt-sync")();

let currency = "ZAR "; // Use ZAR as the base currency

// Function to prompt user to choose stocks to invest in
const chooseStocksToInvestIn = () => {
    const selectedStocks = [];
    const availableStocks = ["AAPL", "GOOGL", "AMZN", "TSLA"];

    while (true) {
        const selectedStock = prompt("Choose a stock to invest in (e.g., AAPL, GOOGL), or type 'done' to finish: ");
        
        if (selectedStock.toLowerCase() === 'done') {
            break;
        } else if (!availableStocks.includes(selectedStock)) {
            console.log("Invalid stock choice, try again.");
        } else {
            selectedStocks.push(selectedStock);
        }
    }

    return selectedStocks;
};

// Function to fetch stock prices from a simulated API
const fetchStockPrices = (stocks) => {
    const stockPrices = {};

    stocks.forEach(stock => {
        const mockStockPrice = Math.random() * 100; // Simulated stock price
        stockPrices[stock] = mockStockPrice;
    });

    return stockPrices;
};

// Function to calculate profit/loss based on initial and current stock prices
const calculateProfitLoss = (initialPrice, currentPrice, investmentAmount) => {
    const changePercentage = ((currentPrice - initialPrice) / initialPrice) * 100;
    const profitLoss = (investmentAmount * changePercentage) / 100;
    return profitLoss;
};

const trade = () => {
    let balance = deposit();
    console.log(currency + balance);

    while (true) {
        console.log("Balance: " + currency + balance);

        const selectedStocks = chooseStocksToInvestIn();
        const stockPrices = fetchStockPrices(selectedStocks);

        selectedStocks.forEach(stock => {
            const initialStockPrice = stockPrices[stock];
            const investmentAmount = getInvestmentAmount(balance);
            balance -= investmentAmount;

            // Simulated trade logic
            const currentStockPrice = stockPrices[stock];
            const isProfitable = Math.random() < 0.5;
            const profitLoss = calculateProfitLoss(initialStockPrice, currentStockPrice, investmentAmount);

            console.log(`Investment: ${stock} | Current Price: ${currentStockPrice.toFixed(2)} | ` +
                `Trade result: ${isProfitable ? "Profit" : "Loss"} | ` +
                `Profit/Loss: ${currency}${profitLoss.toFixed(2)}`);

            if (isProfitable) {
                balance += profitLoss;
            }

            console.log("Balance: " + currency + balance);
        });

        if (balance <= 0) {
            console.log("You have depleted your funds.");
            break;
        }

        const continueTrading = prompt("Do you want to continue trading? (y/n)");

        if (continueTrading.toLowerCase() !== "y") {
            break;
        }
    }
};

trade();
