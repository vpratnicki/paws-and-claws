const { AuthenticationError } = require('apollo-server-express');
const { Pet, User } = require('../../models');
const { signToken } = require('../../utils/auth');

const petResolvers = {
    Query: {
        getAllPets: async () => {
            return Pet.find()
        },
        getPetByID: async (parent, {_id}) => {
            return Pet.findOne({_id})
        },
    },
    Mutation: {
        addPet: async (parent, args, context) => {
            if (context.user) {
                const pet = await Pet.create({ ...args, username: context.user.username });
        
                await User.findByIdAndUpdate(
                  { _id: context.user._id },
                  { $push: { pets: pet._id } },
                  { new: true }
                );
        
                return pet;
              }
        
              throw new AuthenticationError('You need to be logged in!');
            },
    }
};

module.exports = petResolvers;