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

    export const ADD_APPOINTMENT = gql`
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

      ///!!!NOTE: in order for a successful partial update(e.g. only changing email) ALL of the fields must be in the variable. If you don't want a field changed, either have the value be the current value or leave the field empty (not even parenthesis) so the following is acceptable

    //   {
    //     "clientName": "Lalala",
    //     "email": ,
    //     "username": ,
    //     "homeAddress": "234 Nowhere Ave",
    //     "zipcode":
    //   }

    export const UPDATE_USER = gql`
    mutation updateUser($clientName: String, $email: String, $homeAddress: String, $zipcode: Int){
        updateUser(clientName: $clientName, email: $email, homeAddress: $homeAddress, zipcode: $zipcode){
            _id
            username
            email
            homeAddress,
            zipcode
        }
    }`