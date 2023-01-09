const { gql } = require('apollo-server-express');

const user = gql`
    type User {
        _id: ID
        clientName: String
        username: String
        email: String
        phoneNumber: Int
        password: String
        homeAddress: String
        zipcode: Int
        pets: [Pet]
        appointments: [Appointment]
    }

    extend type Query {
            me: User
            getAllUsers: [User]
            getUserByID(_id: ID!): User
    }`

    module.exports = user;