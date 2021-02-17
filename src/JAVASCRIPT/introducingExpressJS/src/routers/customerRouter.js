const express = require('express');
const customerRepository = require('../repositories/customerRepository');
const routerUtil = require('../utils/routerUtil');
const router = express.Router();


router.get('/findById/:id', (req, res) => {
    let customer = customerRepository.findById(req.params.id);
    if (customer != null) {
        res.send(customer);
    } else {
        res.send(routerUtil.message("Cliente não encontrado."));
    }
})

router.post('/add', (req, res) => {
    customerRepository.addCustomer(req.body);
    res.send(routerUtil.message("Cliente adicionado com sucesso."));
});

router.delete('/deleteById/:id', (req, res) => {
    customerRepository.deleteById(req.params.id);
    res.send(routerUtil.message("Cliente removido com sucesso."));

});

router.get('/findAll', (req, res) => {
    let customers = customerRepository.findAll();
    res.send(customers);
});

router.get('/search/:filter', (req, res) => {
    let customers = customerRepository.search(req.params.filter);
    res.send(customers);
});

module.exports = router;