import { gql } from "@apollo/client"

const CREATE_UDD = gql`
  mutation createUdd(
    $branchName: String!,
    $branchSize: String!,
    $branchAddress: String!,
    $langitude: String!,
    $longitude: String!,
    ) {
      addPmi(
        branchName: $branchName,
        branchSize: $branchSize,
        branchAddress: $branchAddress,
        langitude: $langitude,
        longitude: $longitude
      ) {
        branchName,
        branchSize,
        branchAddress
      }
    }
`
