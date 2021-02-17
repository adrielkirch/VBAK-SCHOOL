const dataBaseUtil = require('../utils/dataBaseUtil');


function findByToken(token) {
    let dataBase = dataBaseUtil.getDataBase();
    let user = null;
    dataBase.users.forEach(u => {
        if (u.token == token) {
            user = u;
        }
    });
    return user;
}

function login(login, password) {
    let dataBase = dataBaseUtil.getDataBase();
    let token = null;
    dataBase.users.forEach(u => {
        if (u.password == password && u.login == login) {
            token = u.token;
        }
    });
    return token;
}

module.exports = {
    findByToken,
    login
};