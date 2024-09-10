const fs = require('fs');
const data = require('../data.json');

function viewAll() {
    var longestDescription = 0;
    data.forEach(expense => {
        if (expense.description.length > longestDescription) {
            longestDescription = expense.description.length;
        }
    });
    console.log('ID'.padEnd(4, ' ') + 'Date'.padEnd(11, ' ') + 'Description'.padEnd(longestDescription + 2, ' ') + 'Amount');
    data.forEach(expense => {
        var output = '';
        output += expense.id.toString().padStart(3, ' ');
        output += expense.date.toString().padStart(11, ' ').padEnd(12, ' ');
        output += expense.description.toString().padEnd(longestDescription + 2, ' ');
        output += `\$${expense.amount.toString()}`;
        console.log(output);
    });
}

function sumAll() {
    let sum = 0;
    data.forEach(expense => {
        sum += expense.amount;
    });
    console.log(`Total expenses: \$${sum}`);
}

var months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
}

function viewByMonth(month) {
    let sum = 0;
    data.forEach(expense => {
        if (parseInt(expense.date.split('-')[1]) === month) {
            sum += expense.amount;
        }
    });
    console.log(`Total expenses for ${months[parseInt(month)]}: \$${sum}`);
}

module.exports = {
    viewAll,
    sumAll,
    viewByMonth
};
