const dataBaseUtil = require('../utils/dataBaseUtil')

function addCustomer(customer) {
    let dataBase = dataBaseUtil.getDataBase();
    dataBase.customers.push(customer);
    dataBaseUtil.saveDataBase(dataBase);
}

function findById(id) {
    let dataBase = dataBaseUtil.getDataBase();
    let customer = null;
    dataBase.customers.forEach(c => {
        if (c.id == id) {
            customer = c;
        }
    });
    return customer;
}

function deleteById(id) {
    let dataBase = dataBaseUtil.getDataBase();
    dataBase.customers.forEach((c, i) => {
        if (c.id == id) {
            dataBase.customers.splice(i, 1);
        }
    });
    dataBaseUtil.saveDataBase(dataBase);
}

function findAll() {
    let dataBase = dataBaseUtil.getDataBase();
    return dataBase.customers;
}

function search(filter) {
    let dataBase = dataBaseUtil.getDataBase();
    let filteredCustomers = [];
    dataBase.customers.forEach(c => {
        if (c.email.includes(filter) || c.nome.includes(filter)) {
            filteredCustomers.push(c);
        };
    });
    return filteredCustomers;
}

module.exports = {
    addCustomer,
    findById,
    deleteById,
    findAll,
    search
}