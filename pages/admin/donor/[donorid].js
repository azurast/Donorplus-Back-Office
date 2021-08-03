import React, from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import { useQuery, useMutation } from "@apollo/client";
import { GET_DONOR_DETAIL } from "../../../services/graphql/queries/donorQueries";
import { UPDATE_DONORS_DETAIL } from "../../../services/graphql/mutations/donorMutations";
import Admin from "../../../layouts/Admin";
import Table from "../../../components/Table/Table";
import TableHead from "../../../components/Table/TableHead";
import TableHeader from "../../../components/Table/TableHeader";
import TableBody from "../../../components/Table/TableBody";
import TableRow from "../../../components/Table/TableRow";
import TableCell from "../../../components/Table/TableCell";
import RegularInput from "../../../components/Inputs/RegularInput";

export default function DonorDetail() {

  const router = useRouter();
  const { donorid } = router.query;

  const { loading, error, data } = useQuery(GET_DONOR_DETAIL, {
    variables: { donorId: donorid },
  });

  const[updateDonor, { loading: mutationLoading, error: mutationError, data: mutationData}] = useMutation(UPDATE_DONORS_DETAIL)

  if (loading || mutationLoading) {
    return <h2>Loading</h2>
  }

  if (error || mutationError) {
    console.error(error||mutationError)
    return null;
  }

  const donorsDetail = data.getPendonorDetail;
  const {
    pendonor,
    sex,
    dateOfBirth,
    placeOfBirth,
    bloodType,
    nik,
    donorCount,
    domisiliProvinsi,
    domisiliKotKab,
    domisiliKecamatan,
    domisiliKelurahan,
    domisiliAddress,
    riwayatHamil,
    riwayatCovid,
    riwayatKeluhan,
    riwayatKomorbid,
    riwayatVaksin,
    riwayatGejalaKlinis,
    hospitalName,
    pcrPositiveDate,
    pcrPositiveImg,
    pcrNegativeDate,
    pcrNegativeImg,
    createdAt,
    updatedAt
  } = donorsDetail;

  const {
    fullName,
    phoneNumber,
    email,
    activitys
  } = pendonor;

  const Stepper = ({status, label, date}) => {
    return (
      <div className="flex flex-row mb-2">
        <div className={"w-8 h-8 bg-"+ (status ? "emerald" : "red") +"-500 border-2 border-emerald-200 rounded-full mr-4 block"}>
        </div>
        <div>
          <h5 className="font-semibold text-md">{label}</h5>
          <p className="text-sm">{date}</p>
        </div>
      </div>
    );
  }

  return(
    <>
      <div className="relative flex flex-row space-x-4 min-w-0 w-full mb-6">
        <div className="w-1/2 shadow-lg rounded bg-white px-6 py-6 divide-y">
          <Formik
            initialValues={{
            fullName,
            phoneNumber,
            email,
            sex,
            dateOfBirth,
            placeOfBirth,
            bloodType: bloodType.slice(0,1),
            bloodRhesus: bloodType.slice(1,2),
            nik,
            donorCount,
            domisiliProvinsi,
            domisiliKotKab,
            domisiliKecamatan,
            domisiliKelurahan,
            domisiliAddress,
            riwayatHamil,
            riwayatCovid,
            riwayatKeluhan,
            riwayatKomorbid,
            riwayatVaksin,
            riwayatGejalaKlinis,
            hospitalName,
            pcrPositiveDate,
            pcrPositiveImg,
            pcrNegativeDate,
            pcrNegativeImg
          }}
          onSubmit={ values => {
            alert(JSON.stringify(values, null, 2));
            const { bloodType, bloodRhesus } = values;
            updateDonor({
              variables: {
                donorId: donorid,
                bloodType: bloodType+bloodRhesus
              },
              refetchQueries: [{query: GET_DONOR_DETAIL}]
            })
          }}
          >
            <Form>
              <div className="flex flex-row">
                <h1 className="font-semibold text-lg text-blueGray-700 pb-2">{fullName}</h1>
                <button
                  className={"bg-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}
                  type="submit"
                >
                  <i className="fas fa-save px-2 text-emerald-500"/>
                </button>
              </div>
              <div className="divide-y">
                <div>
                  <h1 className="text-lg text-blueGray-400 uppercase font-bold text-lg py-2">
                    BIODATA
                  </h1>
                  <RegularInput label="Nama Lengkap" name="fullName" inputType="text" disabled={true}/>
                  {/* TODO : CONVERT TO FORMAT */}
                  <RegularInput label="Tanggal Lahir" name="dateOfBirth" inputType="date" disabled={true}/>
                  <RegularInput label="Tempat Lahir" name="placeOfBirth" inputType="text" disabled={true}/>
                  {/* TODO : CONVERT BIRTHDATE TO AGE */}
                  {/*<RegularInput label="Umur" name="placeOfBirth" inputType="text" state="disabled"/>*/}
                  <RegularInput label="Golongan Darah" name="bloodType" inputType="text" disabled={false}/>
                  <RegularInput label="Rhesus" name="bloodRhesus" inputType="text" disabled={false}/>
                  <RegularInput label="Jenis Kelamin" name="sex" inputType="text" disabled={true}/>
                  <RegularInput label="NIK" name="nik" inputType="text" disabled={true}/>
                  <RegularInput label="Nomor HP" name="phoneNumber" inputType="tel" disabled={true}/>
                  <RegularInput label="Email" name="email" inputType="email" disabled={true}/>
                </div>
                <div>
                  <h1 className="text-lg text-blueGray-400 uppercase font-bold text-lg py-2">
                    DOMISILI
                  </h1>
                  <RegularInput label="Provinsi" name="domisiliProvinsi" disabled={true}/>
                  <RegularInput label="Kota/Kabupaten" name="domisiliKotKab" disabled={true}/>
                  <RegularInput label="Kecamatan" name="domisiliKecamatan" disabled={true}/>
                  <RegularInput label="Kelurahan" name="domisiliKelurahan" disabled={true}/>
                  <RegularInput label="Alamat" name="domisiliAddress" disabled={true}/>
                </div>
                <div>
                  <h1 className="text-lg text-blueGray-400 uppercase font-bold text-lg py-2">
                    RIWAYAT COVID-19
                  </h1>
                  <RegularInput label="Pernah Terkena Covid" name="riwayatCovid" disabled={true}/>
                  <RegularInput label="Gejala Selama Covid" name="riwayatGejalaKlinis" disabled={true}/>
                  <RegularInput label="Rumah Sakit Dirawat" name="hospitalName" disabled={true}/>
                  <RegularInput label="Tanggal PCR Positif" name="pcrPositiveDate" disabled={true}/>
                  {/*TODO : CHANGE TO IMAGE*/}
                  <RegularInput label="Bukti PCR Positif" name="pcrPositiveImg" disabled={true}/>
                  <RegularInput label="Tanggal PCR Negatif" name="pcrNegativeDate" disabled={true}/>
                  {/*TODO: CHANGE TO IMAGE*/}
                  <RegularInput label="Bukti PCR Negatif" name="pcrNegativeImg" disabled={true}/>
                </div>
                <div>
                  <h1 className="text-lg text-blueGray-400 uppercase font-bold text-lg py-2">
                    RIWAYAT KESEHATAN
                  </h1>
                  <RegularInput label="Pernah Hamil" name="riwayatHamil" disabled={true}/>
                  <RegularInput label="Sudah Divaksin" name="riwayatVaksin" disabled={true}/>
                  <RegularInput label="Riwayat Gejala Klinis" name="riwayatGejalaKlinis" disabled={true}/>
                  <RegularInput label="Riwayat Penyakit Komorbid" name="riwayatKomorbid" disabled={true}/>
                  {/* TODO : ADD RIWAYAT DONOR DARAH */}
                  {/*<RegularInput label="Riwayat Donor Darah" name="pcrPositiveDate" disabled={true}/>*/}
                </div>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="w-1/2 shadow-lg rounded bg-white px-6 py-6 divide-y">
          <h1 className="font-semibold text-lg text-blueGray-700 pb-2">Riwayat Donor</h1>
            <Table>
              <TableHeader>
                <TableHead title="Nomor"/>
                <TableHead title="Tanggal"/>
                <TableHead title="Tempat"/>
                <TableHead title="Jumlah Kantong"/>
              </TableHeader>
              <TableBody>
                {
                  activitys.map(activity => {
                    const { branch } = activity;
                    return (
                      <>
                        <TableRow>
                          <TableCell value="idx" type="text"/>
                          <TableCell value="idx" type="text"/>
                          <TableCell value={branch.branchName} type="text"/>
                          <TableCell value="idx" type="text"/>
                        </TableRow>
                        <div className="flex flex-auto">
                          <div className="flex-1 rounded bg-blueGray-50 text-blueGray-500 px-6 py-6">
                            <h1 className="text-lg text-blueGray-600 uppercase font-bold text-lg py-2">
                              CATATAN WAWANCARA
                            </h1>
                            <p>
                              dfnsdjfbdjshfbsdfjbsdjfbsdhjfbsdjfhbsdhjfbsjdfbsjdfhbjsh
                            </p>
                            <h1 className="text-lg text-blueGray-600 uppercase font-bold text-lg py-2">
                              HASIL TES DARAH
                            </h1>
                            <p>
                              {/*<Row label="Titer Antibodi" value="250"/>*/}
                            </p>
                            <h1 className="text-lg text-blueGray-600 uppercase font-bold text-lg py-2">
                              PERJALANAN
                            </h1>
                            <div className="flex flex-col">
                              <Stepper label="Skrining Formulir" date="22/06/07" status={true} />
                              <Stepper label="Wawancara" date="22/06/07" status={true} />
                              <Stepper label="Tes Darah" date="22/06/07" status={true} />
                              <Stepper label="Donor Darah" date="22/06/07" status={true} />
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                }
              </TableBody>
            </Table>
        </div>
      </div>
    </>
  );
}

DonorDetail.layout = Admin;

DonorDetail.defaultProps = {
}

DonorDetail.propTypes = {
}
