// ╔═════════════════════════════════╗
// ║            SLOT MACHINE         ║
// ║         ________________        ║
// ║   [  |  7  |  BAR |  🍒 |  ]    ║
// ║   [  |$$$$$|$$$$$$|$$$$$|  ]    ║
// ║   [  |_____|______|_____|  ]    ║
// ║         ________________        ║
// ║   [  | 🍒 |  🍊  |  🍇  |  ]    ║
// ║   [  |$$$$$|$$$$$$|$$$$$|  ]    ║
// ║   [  |_____|______|_____|  ]    ║
// ║         ________________        ║
// ║   [  | 🍇  |  🍒  |  🍊 |  ]    ║
// ║   [  |$$$$$|$$$$$$|$$$$$|  ]    ║
// ║   [  |_____|______|_____|  ]    ║
// ╚═════════════════════════════════╝



// 1. Deposit Money
// 2. Determine line bets
// 3. Collect a bet amount
// 4. Spin slot machine
// 5. Check if user won
// 6. give the user their winings
// 7. play again


const prompt = require("prompt-sync")();


const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A" : 2,
    "B" : 4,
    "C" : 6,
    "D" : 8
}

// MUltipliers
const SYMBOLS_VALUES = {
    "A" : 5,
    "B" : 4,
    "C" : 3,
    "D" : 2

}



// ES6
let currency = "ZAR "
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter Use a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0 ){
            console.log("invalid deposit amount, try again.")
        } else {
            return numberDepositAmount;
        }
    }
};

// betchoices
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ")
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3 ){
            console.log("invalid number of lines, try again.")
        } else {
            return numberOfLines;
        }
    }
}; 

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ")
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet ) || numberBet <= 0 || numberBet > (balance / lines) ){
            console.log("invalid bet, try again.")
        } else {
            return numberBet;
        }
    }
}

// amount is based on balance aka deposited amount




const spin = () => {
    const symbos = [];
}

let balance = deposit();
console.log(currency+(balance))

const numberOfLines = getNumberOfLines()
const bet = getBet(balance);

// console.log("Chances: "+(bet))