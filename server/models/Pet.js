const { Schema, model } = require('mongoose');


const PetSchema = new Schema({
    petName: {
        type: String,
        required: true
    },
    petType: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    age: {
        type: Number,
    },

    // breed: {

    // }
});


const Pet = model('Pet', PetSchema)

module.exports = Pet;