const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/getAll', controllers.course.get.getAll);

router.get('/getEnrolled', auth() , controllers.course.get.getEnrolled);

router.get('/getOne/:id', controllers.course.get.getOne);


router.post('/', auth(), controllers.course.post);

router.put('/:id', auth(), controllers.course.put);

router.delete('/:id', auth(), controllers.course.delete);

module.exports = router;