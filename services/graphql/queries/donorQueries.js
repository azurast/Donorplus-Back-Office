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
  query getDonorDetail($donorId: String!) {
    getPendonorDetail(pendonorId: $donorId) {
      id
      pendonor {
        fullName
        phoneNumber
        email
        activitys {
          branch {
            branchName
          }
          donorType
          interviewNotes
          antibodyLevel
          didDonorAt
          didDonor
          didBloodTestAt
          didBloodTest
          didInterviewAt
          didInterview
          didScheduleAt
          didSchedule
          antibodyLevel
          interviewNotes
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
      riwayatTransfusi
      hospitalName
      pcrPositiveDate
      pcrPositiveImg
      pcrNegativeDate
      pcrNegativeImg
      createdAt
      updatedAt
      pass
    }
  }
`

export {
  GET_ALL_DONORS,
  GET_DONOR_DETAIL
}
