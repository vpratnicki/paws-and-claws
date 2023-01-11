import { gql } from '@apollo/client';

export const QUERY_ME = gql `
{
    me {
      _id
      clientName
      username
      email
      phoneNumber
      homeAddress
      zipcode
      pets{
        petType
        petName
      }
      appointments {
        apptDate
        apptTime
        service 
      }
    }
  }
`