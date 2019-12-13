const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.course.get);

router.post('/', auth(), controllers.course.post);

router.put('/:id', auth(), controllers.course.put);

router.delete('/:id', auth(), controllers.course.delete);

module.exports = router;