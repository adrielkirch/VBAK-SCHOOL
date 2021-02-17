const fs = require('fs');

function getDataBase() {
    let dataBase = fs.readFileSync(__dirname + '/../json/dataBase.json').toString();
    return JSON.parse(dataBase);
}

function saveDataBase(dataBase) {
    fs.writeFileSync(__dirname + '/../json/dataBase.json', JSON.stringify(dataBase));
}



module.exports = {
    getDataBase,
    saveDataBase
}