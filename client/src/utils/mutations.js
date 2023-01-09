import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user {
                _id
                username
                clientName
            }
        }
    } `;

export const ADD_USER = gql`
    mutation addUser($clientName: String! $username: String!, $email: String!, $password: String!, $zipcode: Int!, $homeAddress: String!){
        addUser(clientName: $clientName, username: $username, email: $email, password: $password, homeAddress: $homeAddress, zipcode: $zipcode){
            token
            user {
                _id
                clientName
                username
                email
                password
                homeAddress
                zipcode
            }
        }
    }`;

    export const ADD_PET = gql`
        mutation addPet($petName: String!, $petType: String!){
            addPet(petName: $petName, petType: $petType){
                _id
                petName
                petType
                username
            }
        }
    `;   

    export const ADD_APPOINTMENT = `gql
    mutation addAppointment($apptDate: Int!, $apptTime: Int!, $service: String!){
        addAppointment(apptDate: $apptDate, apptTime: $apptTime, service: $service) {
            _id
            apptDate
            apptTime
            service
            address
            client
            }
        }
      }
    
    `