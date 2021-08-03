import React, {useCallback, useEffect, useState} from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import {Form, FormikProvider, useFormik} from "formik";
import { useQuery } from "@apollo/client";
import { GET_DONOR_DETAIL } from "../../../services/graphql/queries/donorQueries";

import Admin from "../../../layouts/Admin";
import Table from "../../../components/Table/Table";
import TableHead from "../../../components/Table/TableHead";
import TableHeader from "../../../components/Table/TableHeader";
import TableBody from "../../../components/Table/TableBody";
import TableRow from "../../../components/Table/TableRow";
import TableCell from "../../../components/Table/TableCell";
import RegularInput from "../../../components/Inputs/RegularInput";

export default function DonorDetail() {

  const [editButtonState, setEditButtonState] = useState(false);

  const router = useRouter();
  const { props, donorid } = router.query;

  const { loading, error, data } = useQuery(GET_DONOR_DETAIL, {
    variables: { donorId: donorid },
  });

  if (loading) {
    return <h2>Loading</h2>
  }

  if (error) {
    console.error(error)
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

  const formik = useFormik({
    initialValues: {
      fullName,
      phoneNumber,
      email,
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
      pcrNegativeImg
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const Row = ({label, value, name}) => {
    return (
      editButtonState === false
        ? <div className="flex flex-column pb-2">
            <div className="font-semibold w-1/2 text-left justify-self-start">
              {label}
            </div>
            <div className="w-1/2 text-left justify-self-start">
              {value}
            </div>
          </div>
        : <FormikProvider value={formik}>
            <RegularInput label={label} name={name} inputType="text"/>
          </FormikProvider>
    )
  }

  const handleEditButtonClick = () => {
    //  TODO : MAKE SOME FIELDS EDITABLE & MAKE 'SAVE CHANGES' & 'CANCEL' BUTTON
    setEditButtonState(!editButtonState);
  }

  const Biodata = () => {
    return (
      <div>
        <h1 className="text-lg text-blueGray-400 uppercase font-bold text-lg py-2">
          BIODATA
        </h1>
        <Row label="Nama Lengkap" value={fullName} name="fullName"/>
        <Row label="Tanggal Lahir" value={dateOfBirth} name="dateOfBirth"/>
        <Row label="Tempat Lahir" value={placeOfBirth} name="placeOfBirth"/>
        {/*<Row label="Umur" value="#"/>*/}
        <Row label="Golongan Darah" value={bloodType.slice(0,1)} name="bloodType"/>
        <Row label="Rhesus" value={bloodType.slice(1,2)} name="rhesus"/>
        <Row label="Jenis Kelamin" value={sex} name="sex"/>
        <Row label="NIK" value={nik} name="nik"/>
        <Row label="Nomor HP" value={phoneNumber} name="phoneNumber"/>
      </div>
    );
  }

  const Domisili = () => {
    return (
      <div>
        <h1 className="text-lg text-blueGray-400 uppercase font-bold text-lg py-2">
          DOMISILI
        </h1>
        <Row label="Provinsi" value={domisiliProvinsi}/>
        <Row label="Kota/Kabupaten" value={domisiliKotKab}/>
        <Row label="Kecamatan" value={domisiliKecamatan}/>
        <Row label="Kelurahan" value={domisiliKelurahan}/>
        <Row label="Alamat" value={domisiliAddress}/>
      </div>
    );
  }

  const CovidHistory = () => {
    return (
      <div>
        <h1 className="text-lg text-blueGray-400 uppercase font-bold text-lg py-2">
          RIWAYAT COVID-19
        </h1>
        <Row label="Pernah Terkena Covid" value={riwayatCovid}/>
        <Row label="Gejala Selama Covid" value={riwayatGejalaKlinis}/>
        <Row label="Rumah Sakit Dirawat" value={hospitalName}/>
        <Row label="Tanggal PCR Positif" value={pcrPositiveDate}/>
        <Row label="Bukti PCR Positif" value={pcrPositiveImg}/>
        <Row label="Tanggal PCR Negatif" value={pcrNegativeDate}/>
        <Row label="Bukti PCR Negatif" value={pcrNegativeImg}/>
      </div>
    );
  }

  const HealthHistory = () => {
    return (
      <div>
        <h1 className="text-lg text-blueGray-400 uppercase font-bold text-lg py-2">
          RIWAYAT COVID-19
        </h1>
        <Row label="Pernah Hamil" value={riwayatHamil}/>
        <Row label="Sudah Divaksin" value={riwayatVaksin}/>
        {/*<Row label="Pernah Menerima Transfusi (3 bulan terakhir)" value={riwayatGejalaKlinis}/>*/}
        <Row label="Riwayat Penyakit Komorbid" value={riwayatKomorbid}/>
        {/*<Row label="Riwayat Donor Darah" value={riwaya/>*/}
      </div>
    );
}

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
            <form>
              <div className="flex flex-row">
                <h1 className="font-semibold text-lg text-blueGray-700 pb-2">{fullName}</h1>
                <button
                  hidden={editButtonState}
                  className={"bg-yellow-500 text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}
                  type="button"
                  onClick={handleEditButtonClick}
                >
                  Ubah
                </button>
                <button
                  hidden={!editButtonState}
                  className={"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}
                  type="submit"
                >
                  Simpan
                </button>
                <button
                  hidden={!editButtonState}
                  className={"bg-white-500 text-red-500 active:bg-white-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}
                  type="button"
                  onClick={handleEditButtonClick}
                >
                  Cancel
                </button>
              </div>
              <div className="divide-y">
                <Biodata/>
                <Domisili/>
                <CovidHistory/>
                <HealthHistory/>
              </div>
            </form>
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
                              <Row label="Titer Antibodi" value="250"/>
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
