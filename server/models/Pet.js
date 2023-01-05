const { Schema, model } = require('mongoose');

const PetSchema = new Schema({
    petName: {
        type: String
    },
    petType: {
        type: String
    },
    owner: {
        type: String
    }
});


const Pet = model('Pet', PetSchema)

module.exports = Pet;