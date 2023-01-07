const { Schema, model } = require('mongoose');

const AppointmentSchema = new Schema({
    apptDate: {
        type: Date
    },
    // clientName: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    // petName: {
    //     type: Schema.Types.ObjectId,
    // }
})


const Appointment = model('Appointment', AppointmentSchema);

module.exports = Appointment;