import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_DONOR_DETAIL } from "../../../services/graphql/queries/donorQueries";

import Admin from "../../../layouts/Admin";
import Table from "../../../components/Table/Table";
import TableHead from "../../../components/Table/TableHead";
import TableHeader from "../../../components/Table/TableHeader";
import TableBody from "../../../components/Table/TableBody";
import TableRow from "../../../components/Table/TableRow";
import TableCell from "../../../components/Table/TableCell";

export default function DonorDetail() {

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

  console.log("===donorsDetail", donorsDetail);

  const Row = ({label, value}) => {
    return (
      <div className="flex flex-column pb-2">
        <div className="font-semibold w-1/2 text-left justify-self-start">
          {label}
        </div>
        <div className="w-1/2 text-left justify-self-start">
          {value}
        </div>
      </div>
    );
  }

  const Biodata = () => {
    return (
      <div>
        <h1 className="text-lg text-blueGray-400 uppercase font-bold text-lg py-2">
          BIODATA
        </h1>
        <Row label="Nama Lengkap" value={fullName}/>
        <Row label="Tanggal Lahir" value={dateOfBirth}/>
        <Row label="Tempat Lahir" value={placeOfBirth}/>
        <Row label="Umur" value="#"/>
        <Row label="Golongan Darah" value={bloodType}/>
        <Row label="Rhesus" value={bloodType}/>
        <Row label="Jenis Kelamin" value={sex}/>
        <Row label="NIK" value={nik}/>
        <Row label="Nomor HP" value={phoneNumber}/>
        <Row label="Pekerjaan" value="not yet"/>
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
          <h1 className="font-semibold text-lg text-blueGray-700 pb-2">{fullName}</h1>
          <div className="divide-y">
            <Biodata/>
            <Domisili/>
            <CovidHistory/>
            <HealthHistory/>
          </div>
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

DonorDetail.defaultProps = {}

DonorDetail.propTypes = {}
