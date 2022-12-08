import {
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import useGlobal from "../store/global";
import Layout from "../components/Dashboard/Layout";
import { getProfilebByUserId } from "../services/profileService";
import { useEffect, useState } from "react";

const jeniskelamin = {
  1: "Perempuan",
  2: "Laki-laki",
};
const statusnikah = {
  1: "Menikah",
  2: "Belum Menikah",
};
const Employee = () => {
  const session = useGlobal((state) => state.session);
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    // console.log(session)
    getProfilebByUserId(session.userid).then((res) => {
      //console.log(res.data);
      setDetail(res.data[0]);
    });
  }, []);

  return (
    <Layout>
      <Heading>Informasi Umum</Heading>
      {detail && (
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td w={"40%"}>Nip</Td>
                <Td w={"1%"}>:</Td>
                <Td>{detail.nip}</Td>
              </Tr>
              <Tr>
                <Td>Nama</Td>
                <Td>:</Td>
                <Td>{detail.nama}</Td>
              </Tr>
              <Tr>
                <Td>Email</Td>
                <Td>:</Td>
                <Td>{detail.email}</Td>
              </Tr>
              <Tr>
                <Td>Tempat Lahir</Td>
                <Td>:</Td>
                <Td>{detail.tempatlahir}</Td>
              </Tr>
              <Tr>
                <Td>Tanggal Lahir</Td>
                <Td>:</Td>
                <Td>{detail.tanggallahir}</Td>
              </Tr>
              <Tr>
                <Td>Jenis Kelamin</Td>
                <Td>:</Td>
                <Td>{jeniskelamin[detail.jeniskelamin]}</Td>
              </Tr>
              <Tr>
                <Td>Nomor Telephone</Td>
                <Td>:</Td>
                <Td>{detail.telp}</Td>
              </Tr>
              <Tr>
                <Td>Unit Kerja</Td>
                <Td>:</Td>
                <Td>{detail.kodeunit}</Td>
              </Tr>
              <Tr>
                <Td>Jabatan</Td>
                <Td>:</Td>
                <Td>{detail.jabatan}</Td>
              </Tr>
              <Tr>
                <Td>Status Nikah</Td>
                <Td>:</Td>
                <Td>{statusnikah[detail.statusnikah]}</Td>
              </Tr>
              <Tr>
                <Td>Agama</Td>
                <Td>:</Td>
                <Td>{detail.agama}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      )}
      <Heading>Alamat</Heading>
      {detail && (
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td w={"40%"}>Alamat</Td>
                <Td w={"1%"}>:</Td>
                <Td>{detail.alamat}</Td>
              </Tr>
              <Tr>
                <Td>Provinsi</Td>
                <Td>:</Td>
                <Td>{detail.provinsi}</Td>
              </Tr>
              <Tr>
                <Td>Kabupaten/Kota</Td>
                <Td>:</Td>
                <Td>{detail.kota}</Td>
              </Tr>
              <Tr>
                <Td>Kecamatan</Td>
                <Td>:</Td>
                <Td>{detail.kecamatan}</Td>
              </Tr>
              <Tr>
                <Td>Kelurahan</Td>
                <Td>:</Td>
                <Td>{detail.kelurahan}</Td>
              </Tr>
              <Tr>
                <Td>RT</Td>
                <Td>:</Td>
                <Td>{detail.rt}</Td>
              </Tr>
              <Tr>
                <Td>RW</Td>
                <Td>:</Td>
                <Td>{detail.rw}</Td>
              </Tr>
              <Tr>
                <Td>Kode Pos</Td>
                <Td>:</Td>
                <Td>{detail.kodepos}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Layout>
  );
};

export default Employee;
