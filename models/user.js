const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    tripJoined: [{type: ObjectId, ref: 'Trip'}],
    //_id: ObjectId,
    }, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
//exportar en routes