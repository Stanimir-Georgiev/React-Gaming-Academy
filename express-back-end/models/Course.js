const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const courseSchema = new Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: [true, "Course name is required!"],
    },
    enrolledUsers: [
        { 
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User'
        }
    ],
    totalVideos: {
        type: mongoose.SchemaTypes.Number,
        default: 0
    },
    estimatedTime: {
        type: mongoose.SchemaTypes.Number,
        default: 0
    },
    difficulty: {
        type: mongoose.SchemaTypes.String,
        default: "Easy"
    },
    imgUrl: {
        type: mongoose.SchemaTypes.String
    },
    rating: {
        type: mongoose.SchemaTypes.Number,
        default: 0
    },
    description: {
        type: mongoose.SchemaTypes.String,
    },
    videos: [
        {
            type: mongoose.SchemaTypes.String
        }
    ],
    game: {
        type: mongoose.SchemaTypes.String
    },
    
})

module.exports = new Model('Course',courseSchema)