const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;

const userSchema = new Schema({

    username: {
       type: mongoose.SchemaTypes.String,
       required: [true, "Username is required!"],
       unique: [true, "Username should be unique"],
       minlength: [3, "Username should be at least 3 characters"],
       maxlength: [15, "Username should not be more than 15 characters"]
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: [true, "Password is required!"],
        minlength: [5, "Password should be at least 5 characters"]
    },
    firstName: {
        type: mongoose.SchemaTypes.String,
        default: "",
    },
    imgUrl: {
        type: mongoose.SchemaTypes.String,
        default: "http://res.cloudinary.com/drs58tv83/image/upload/v1576121885/t1ceeiokhqija5va8f3s.png"
    },
    lastName: {
        type: mongoose.SchemaTypes.String,
        default: "",
    },
    credits: {
        type: mongoose.SchemaTypes.Number,
        default: 0,
    },
    description: {
        type: mongoose.SchemaTypes.String,
        default: ''
    },
    isAdmin: {
        type: mongoose.SchemaTypes.Boolean,
        default: false
    },
    enrolledCourses: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Course"
        }
    ],
});

userSchema.methods = {

    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }

};

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = new Model('User', userSchema);