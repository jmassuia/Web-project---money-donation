const {Router} = require('express');

//Controllers
const volunteerController = require('./controller/volunteerController');
const ongsController = require('./controller/ongController');
const incidentController = require('./controller/incidentController');
const routes = Router();

//*************************routes*************************/
// Informações do usuário
routes.get('/users',volunteerController.index);
routes.post('/users',volunteerController.store);
// Cadastro de Nova ONG
routes.get('/ongs',ongsController.index);
routes.post('/ongs',ongsController.store);
// Cadastro de novo caso
routes.get('/incident',incidentController.index)
routes.post('/incident',incidentController.store)
module.exports = routes;