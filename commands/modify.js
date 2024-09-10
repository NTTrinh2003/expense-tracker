const fs = require('fs');
const data = require('../data.json');

function add(description, amount) {
  var id = data[data.length - 1].id + 1;
  const newExpense = {
    id: id,
    date: new Date().toISOString().split('T')[0],
    description: description,
    amount: amount
  };
  data.push(newExpense);
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
  return id;
}

function remove(id) {
    const index = data.findIndex(expense => expense.id === id);
    if (index === -1) {
        console.log('Expense not found');
    } else {
        data.splice(index, 1);
        fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    }
}

function update(id, description, amount) {
    const index = data.findIndex(expense => expense.id === id);
    if (index === -1) {
        console.log('Expense not found');
    } else {
        data[index].description = description;
        data[index].amount = amount;
        fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    }
}

module.exports = {
  add,
  remove,
  update,
};
