import { gql } from "@apollo/client";

const UPDATE_DONORS_DETAIL = gql`
  mutation updateDonorsDetail(
    $donorId: String!
    $bloodType: String!
  ) {
    updatePendonorDetail(
     id: $donorId,
     bloodType: $bloodType
    ) {
      bloodType
    }
  }`

export {
  UPDATE_DONORS_DETAIL
}