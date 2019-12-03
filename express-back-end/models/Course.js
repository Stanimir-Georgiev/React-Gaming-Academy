const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const courseSchema = new Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: [true, "Course name is required!"],
        unique: [true, "Course name should be unique"],
        minlength: [5, "Course name should be at least 5 characters"]
    },
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
    rating: {
        type: mongoose.SchemaTypes.Number,
        default: 0
    },
    description: {
        type: mongoose.SchemaTypes.String,
        minlength: [15, "The description should be at least 15 characters"]
    },
    videos: [
        {
            type: mongoose.SchemaTypes.String
        }
    ],
    game: {
        type: mongoose.SchemaTypes.String
    },
    totalEntrolledUsers: {
        type: mongoose.SchemaTypes.Number,
        default: 0
    }
    
})

module.exports = new Model('Course',courseSchema)