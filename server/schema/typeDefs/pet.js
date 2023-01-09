const { gql } = require('apollo-server-express');

const pet = gql`
    type Pet {
        _id: ID
        petName: String
        petType: String
        petAge: Int
        userName: String
    }

    extend type Query {
        getAllPets: [Pet]
        getPetByID(_id: ID!): Pet
    }

    extend type Mutation {
        addPet(petName: String!, petType: String!, petAge: Int): Pet
    }

`

module.exports = pet;