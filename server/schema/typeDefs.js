const { gql } = require('apollo-server-express');


const typeDefs = gql`

type Pet {
    _id: ID
    petName: String
    petType: String
    petAge: Int
    username: String
}

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

type Appointment {
    _id: ID
    apptDate: Int
    apptTime: Int
    address: String
    service: String
    client: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
   me: User 
   getUsers: [User]
   getAppointments: [Appointment]
   getUserByID(_id: ID!): User
   getUserByName(clientName: String!): User

   getPets: [Pet]
   getPetByID(_id: ID!): Pet
   getType(petType: String!):[Pet]
}

type Mutation {
    addAppointment(apptDate: Int!, apptTime: Int!, service: String!): Appointment
    addUser(username: String!, email: String!, clientName: String!, password: String! homeAddress: String!, zipcode: Int!): Auth
    login(email: String!, password: String!): Auth
    addPet(petName: String!, petType: String!, petAge: Int): Pet

}

`;


module.exports= typeDefs;