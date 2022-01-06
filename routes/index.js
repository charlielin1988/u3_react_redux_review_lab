const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));

router.post('/destinations', controllers.createDestination);
router.get('/destinations', controllers.getAllDestinations);
router.get('/destinations/:_id', controllers.getDestinationById);
router.put('/destinations/:_id', controllers.updateDestination);
router.delete('/destinations/:_id', controllers.deleteDestination);

module.exports = router;
