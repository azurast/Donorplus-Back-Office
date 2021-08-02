import { gql } from "@apollo/client"

const GET_ALL_DONORS = gql`
  query getAllDonors {
    getAllPendonor {
      id
      fullName
      pendonorDetails {
        sex
        dateOfBirth
        bloodType
        nik
      }
    }
  }
`

const GET_DONOR_DETAIL = gql`
  query getAllDonors($donorId: String!) {
    getPendonorDetail(pendonorId: $donorId) {
      pendonor {
        fullName
        phoneNumber
        email
        activitys {
          branch {
            branchName
          }
        }
      }
      sex
      dateOfBirth
      placeOfBirth
      bloodType
      nik
      donorCount
      domisiliProvinsi
      domisiliKotKab
      domisiliKecamatan
      domisiliKelurahan
      domisiliAddress
      riwayatHamil
      riwayatCovid
      riwayatKeluhan
      riwayatKomorbid
      riwayatVaksin
      riwayatGejalaKlinis
      hospitalName
      pcrPositiveDate
      pcrPositiveImg
      pcrNegativeDate
      pcrNegativeImg
      createdAt
      updatedAt
    }
  }
`

export {
  GET_ALL_DONORS,
  GET_DONOR_DETAIL
}