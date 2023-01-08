const { Schema, model } = require('mongoose');

const AppointmentSchema = new Schema({
    apptDate: {
        type: Date
    },
    client: {
        type: String
    },
    service: {
        type: String
    }
    
})


const Appointment = model('Appointment', AppointmentSchema);

module.exports = Appointment;