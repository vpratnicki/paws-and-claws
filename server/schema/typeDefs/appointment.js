const { gql } = require('apollo-server-express');

const appointment = gql`
    type Appointment {
        _id: ID
        apptDate: Int
        apptTime: Int
        address: String
        service: String
        client: String
    }

    extend type Query {
        getAllAppointments: [Appointment]
    }

    extend type Mutation {
        addAppointment(apptDate: Int!, apptTime: Int!, service: String!): Appointment
    }
`;

module.exports = appointment;