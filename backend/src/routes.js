const {Router} = require('express');

//Controllers
const volunteerController = require('./controller/volunteerController');
const ongsController = require('./controller/ongController');
const incidentController = require('./controller/incidentController');
const sessionController = require('./controller/sessionController');

const routes = Router();

//*************************routes*************************/
// Doadores
routes.get('/users',volunteerController.index);
routes.post('/users',volunteerController.store);
// ONGs
routes.get('/ongs',ongsController.index);
routes.get('/session',sessionController.show);
routes.post('/ongs',ongsController.store);
routes.post('/session',sessionController.session);
// Casos
routes.get('/incident',incidentController.index)
routes.post('/incident',incidentController.store)
routes.delete('/incident/:id',incidentController.delete)


module.exports = routes;