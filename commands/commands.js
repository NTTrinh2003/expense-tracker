const { add, remove, update } = require('./modify');
const { viewAll, sumAll, viewByMonth } = require('./view');

function commands(process) {
    const firstArg = process.argv[2];

    switch (firstArg) {
        case 'add':
            var description = '';
            var amount = 0;
            if (process.argv[3] === '--description') {
                let i = 4
                for (; i < process.argv.length; i++) {
                    if (process.argv[i] !== '--amount') {
                        description += process.argv[i] + ' ';
                    } else {
                        amount = parseInt(process.argv[i + 1]);
                        break;
                    }
                }
    
                if (i === process.argv.length) {
                    console.log('Invalid command');
                } else {
                    description = description.trim();
                    const id = add(description, amount);
                    console.log('Expense added successfully (ID: ' + id + ')');
                }
            }
            else {
                console.log('Invalid command');
            }
            break;
        case 'remove':
            if (process.argv[3] === '--id' && !isNaN(process.argv[4])) {
                remove(parseInt(process.argv[4]));
                console.log('Expense removed successfully');
            } else {
                console.log('Invalid command');
            }
            break;
        case 'update':
            var id = 0;
            var description = '';
            var amount = 0;
            if (process.argv[3] === '--id' && !isNaN(process.argv[4])) {
                id = parseInt(process.argv[4]);
                if (process.argv[5] === '--description') {
                    let i = 6;
                    for (; i < process.argv.length; i++) {
                        if (process.argv[i] !== '--amount') {
                            description += process.argv[i] + ' ';
                        } else {
                            amount = parseInt(process.argv[i + 1]);
                            break;
                        }
                    }
    
                    if (i === process.argv.length) {
                        console.log('Invalid command');
                    } else {
                        description = description.trim();
                        update(id, description, amount);
                        console.log('Expense updated successfully');
                    }
                } else {
                    console.log('Invalid command');
                }
            } else {
                console.log('Invalid command');
            }
            break;
        case 'list':
            viewAll();
            break;
        case 'summary':
            if (process.argv.length === 3) {
                sumAll();
            } else {
                if (process.argv[3] === '--month' && !isNaN(process.argv[4])) {
                    viewByMonth(parseInt(process.argv[4]));
                } else {
                    console.log('Invalid command');
                }
            }
            break;
        default:
            console.log('Invalid command');
            break;
    }
}

module.exports = {
    commands
}