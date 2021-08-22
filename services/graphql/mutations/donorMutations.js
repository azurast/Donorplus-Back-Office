import { gql } from "@apollo/client";

const UPDATE_DONORS_DETAIL = gql`
  mutation updateDonorsDetail(
    $donorDetailId: String!,
    $donorId: String!
    $bloodType: String!
  ) {
    updatePendonorDetail(
     id:  $donorDetailId,
     pendonorId: $donorId,
     bloodType: $bloodType
    ) {
      bloodType
    }
  }`

export {
  UPDATE_DONORS_DETAIL
}