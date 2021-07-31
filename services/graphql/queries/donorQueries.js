import { gql } from "@apollo/client"

const GET_ALL_DONORS = gql`
  query getAllDonors {
    getAllPendonor {
      id
      fullName
      phoneNumber
      email
    }
  }
`

export { GET_ALL_DONORS }