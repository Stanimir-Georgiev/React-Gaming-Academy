const models = require('../models');

module.exports = {
  get: (req, res, next) => {

  },

  post: (req, res, next) => {
      const {name, difficulty, game, estimatedTime, imgUrl} = req.body;
      console.log(name)
      models.Course.create({name, difficulty, game, estimatedTime, imgUrl})
      .then((createdCourse) => res.send(createdCourse))
      .catch(next)
  },

  put: (req, res, next) => {
   
  },

  delete: (req, res, next) => {
    
  }
};