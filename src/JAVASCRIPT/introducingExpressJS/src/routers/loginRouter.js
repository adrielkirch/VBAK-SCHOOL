const bodyParser = require('body-parser');
const express = require('express');
const userRepository = require('../repositories/userRepository');
const routerUtil = require('../utils/routerUtil');
const router = express.Router();

router.post('/login', (req, res) => {
    let login = req.body.login;
    let password = req.body.password;
    let token = userRepository.login(login, password);

    if (token == null) {
        res.send(routerUtil.message('Usuário e/ou senha inválido(s).'));
    } else {
        res.send({
            token
        });
    }

});




module.exports = router;