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
      models.Course.find({ _id: id })
        .then((course) => res.send(course[0]))
        .catch(next)
    },
    getEnrolled: (req, res, next) => {
      const userId = req.user._id
      models.User.find({ _id: userId }).populate('enrolledCourses')
        .then((user) => res.send(user[0]))
        .catch(next);
    }
  },
  post: (req, res, next) => {
    const { name, difficulty, game, estimatedTime, imgUrl, description } = req.body;

    models.Course.create({ name, difficulty, game, estimatedTime, imgUrl, description })
      .then((createdCourse) => res.send(createdCourse))
      .catch(next)
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const userId = req.user._id
    models.Course.updateOne({ _id: id }, { $push: { enrolledUsers: userId } })
      .then((updatedCourse) => {
        return Promise.all([
          models.User.updateOne({ _id: userId }, { $push: { enrolledCourses: id } }),
          models.Course.findOne({ _id: id })
        ])
      }).then(([modifiedObj, origamiObj]) => {
        res.send(origamiObj);
      })
      .catch(next);
  },

  delete: (req, res, next) => {

  }
};