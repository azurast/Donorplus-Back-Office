import { gql } from "@apollo/client"

const UPDATE_ACTIVITY = gql`
    mutation updateActivity(
        $activityId:String!,

        $passFormStatus:Boolean!,
        $passFormDate:Date!,
        $passFormShow: Boolean!,

        $didScheduleInterviewStatus: Boolean!,
        $didScheduleDate: Date!,
        $didScheduleShow: Boolean!,

        $didInterviewStatus: Boolean!,
        $didInterviewDate: Date!,
        $didInterviewShow: Boolean!,

        $passInterviewStatus: Boolean!,
        $passInterviewDate: Date!,
        $passInterviewShow: Boolean!

        $didBloodTestStatus: Boolean!,
        $didBloodTestDate: Date!,
        $didBloodTestShow: Boolean!,

        $passBloodTestStatus: Boolean!,
        $passBloodTestDate: Date!,
        $passBloodTestShow: Boolean!,

        $didScheduleDonorStatus: Boolean!,
        $didScheduleDonorDate: Date!,
        $didScheduleDonorShow: Boolean!,

        $didDonorStatus: Boolean!,
        $didDonorDate: Date!
        $didDonorShow: Boolean!
    ){
        updateActivity(
            id: $activityId,

            passForm: $passFormStatus,
            passFormAt: $passFormDate,
            passFormShow: $passFormShow,

            didSchedule: $didScheduleInterviewStatus,
            didScheduleAt: $didScheduleDate,
            didScheduleShow: $didScheduleShow,

            didInterview: $didInterviewStatus,
            didInterviewAt: $didInterviewDate,
            didInterviewShow: $didInterviewShow,

            passInterview: $passInterviewStatus,
            passInterviewAt: $passInterviewDate,
            passInterviewShow: $passInterviewShow,

            didBloodTest: $didBloodTestStatus,
            didBloodTestAt: $didBloodTestDate,
            didBloodTestShow: $didBloodTestShow,

            passBloodTest: $passBloodTestStatus,
            passBloodTestAt: $passBloodTestDate,
            passBloodTestShow: $passBloodTestShow,

            didScheduleTest: $didScheduleDonorStatus,
            didScheduleTestAt: $didScheduleDonorDate,
            didScheduleTestShow: $didScheduleDonorShow,

            didDonor: $didDonorStatus,
            didDonorAt: $didDonorDate,
            didDonorShow: $didDonorShow
        ) {
            id
            pendonor {
                fullName
            }
        }
    }
`

const UPDATE_INTERVIEW = gql`
    mutation updateActivity(
        $activityId:String!,
        
        $didInterviewStatus: Boolean!,
        $passInterviewStatus: Boolean!,
        $passInterviewDate: Date!,
        $passInterviewShow: Boolean!
    ){
        updateActivity(
            id: $activityId,
            didInterview: $didInterviewStatus,
            passInterview: $passInterviewStatus,
            passInterviewAt: $passInterviewDate,
            passInterviewShow: $passInterviewShow,
        ) {
            id
            pendonor {
                fullName
            }
        }
    }
`

const GET_INTERVIEW_ACTIVITIES = gql`
    query getInterviewActivities{
        getActivityForInterview {
            id
            didInterview
            didInterviewAt
            passInterview
            passInterviewAt
            pendonor {
                fullName
                pendonorDetails {
                    sex
                    dateOfBirth
                    bloodType
                }
            }
        }
    }
`

const GET_BLOODTEST_ACTIVITIES = gql`
    query getBloodTestActivities{
        getActivityForBloodTest {
            id
            pendonor {
                fullName
            }
        }
    }
`

const GET_PLASMADONOR_ACTIVITIES = gql`
    query getDonorPlasmaActivities{
        getActivityForDonor {
            id
            pendonor {
                fullName
            }
        }
    }
`

export {
  UPDATE_ACTIVITY,
  UPDATE_INTERVIEW,
  GET_INTERVIEW_ACTIVITIES,
  GET_BLOODTEST_ACTIVITIES,
  GET_PLASMADONOR_ACTIVITIES
}