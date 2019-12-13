const models = require('../models');

module.exports = {
  get: (req, res, next) => {
    models.Course.find()
    .then((courses) => res.send(courses))
    .catch(next)

  },

  post: (req, res, next) => {
      const {name, difficulty, game, estimatedTime, imgUrl} = req.body;

      models.Course.create({name, difficulty, game, estimatedTime, imgUrl})
      .then((createdCourse) => res.send(createdCourse))
      .catch(next)
  },

  put: (req, res, next) => {
   
  },

  delete: (req, res, next) => {
    
  }
};