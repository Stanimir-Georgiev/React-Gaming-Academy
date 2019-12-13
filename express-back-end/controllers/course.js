const models = require('../models');

module.exports = {
  get: {
    getAll: (req, res, next) => {
      models.Course.find()
        .then((courses) => res.send(courses))
        .catch(next)
    },
    getOne: (req, res, next) => {
      const id = req.params.id;
      models.Course.find({_id: id})
      .then((course) => res.send(course[0]))
      .catch(next)
    }
  },
  post: (req, res, next) => {
    const { name, difficulty, game, estimatedTime, imgUrl, description } = req.body;

    models.Course.create({ name, difficulty, game, estimatedTime, imgUrl, description })
      .then((createdCourse) => res.send(createdCourse))
      .catch(next)
  },

  put: (req, res, next) => {

  },

  delete: (req, res, next) => {

  }
};