const {Router} = require('express');

//Controllers
const doadoresController = require('./controller/doadoresController');
const routes = Router();

//*************************routes*************************/
// Informações do usuário
routes.get('/users',doadoresController.index);
routes.post('/users',doadoresController.store);
// Cadastro de Nova ONG

module.exports = routes;