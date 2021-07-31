import { gql } from "@apollo/client"

const GET_ALL_UDDS = gql`
  query getAllUdd {
    getAllPmi {
      id
      branchName
      branchSize
      branchAddress
    }
  }
`

export { GET_ALL_UDDS }