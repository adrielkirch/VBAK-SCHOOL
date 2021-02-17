const userRepository = require("../repositories/userRepository");
const routerUtil = require("../utils/routerUtil");

function loginMiddleware(req, res, next) {

    if (req.url == '/auth/login') {
        next();
        return;
    }

    let token = req.header("Authorization")
    let user = userRepository.findByToken(token);

    if (user != null) {
        next();
    } else {
        res.send(routerUtil.message('Acesso negado.'));
    }

}

module.exports = loginMiddleware;