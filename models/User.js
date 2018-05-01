const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: {
        type: String
    }
});

mongoose.model('users', userSchema);