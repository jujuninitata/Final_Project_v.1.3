import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../../components/Dashboard/Layout";
import { getTrxCutiDetail } from "../../../services/trxCutiService";
import useGlobal from "../../../store/global";

const status = {
  1: "Permohonan Cuti Baru",
  2: "Disetujui Supervisor",
  3: "Ditolak Supervisor",
  4: "Pengajuan Dibatalkan"
};

const DetailCutiHR = () => {
  const session = useGlobal((state) => state.session);
  let { cutiId } = useParams();
  const [detail, setDetail] = useState({});
  const [catatan, setCatatan] = useState(null);
  const toast = useToast({
    position: "top",
  });

  const navigate = useNavigate();
  useEffect(() => {
    getTrxCutiDetail(cutiId).then((res) => {
      console.log(res.data);
      setDetail(res.data);
    });
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setCatatan(value);
  };

  return (
    <Layout>
      <Heading>Detail Pengajuan Cuti</Heading>
      {detail && (
        <TableContainer mt={8} w={800}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td>Nama Pegawai</Td>
                <Td>:</Td>
                <Td>{detail.nama}</Td>
              </Tr>
              <Tr>
                <Td w={"40%"}>Nip</Td>
                <Td w={"1%"}>:</Td>
                <Td>{detail.nip}</Td>
              </Tr>
              <Tr>
                <Td>Divisi</Td>
                <Td>:</Td>
                <Td>{detail.divisi}</Td>
              </Tr>
              <Tr>
                <Td>Jenis Cuti</Td>
                <Td>:</Td>
                <Td>{detail.jeniscuti}</Td>
              </Tr>
              <Tr>
                <Td>Sisa Cuti</Td>
                <Td>:</Td>
                <Td>{detail.sisacuti} Hari</Td>
              </Tr>
              <Tr>
                <Td>Tanggal</Td>
                <Td>:</Td>
                <Td>
                  {detail.tanggalmulai?.substring(0, 10)} -{" "}
                  {detail.tanggalakhir?.substring(0, 10)}
                </Td>
              </Tr>
              <Tr>
                <Td>Durasi</Td>
                <Td>:</Td>
                <Td>{detail.durasi} Hari</Td>
              </Tr>
              <Tr>
                <Td>Sisa Cuti Setelah Pengajuan</Td>
                <Td>:</Td>
                <Td>{detail.sisacuti - detail.durasi} Hari</Td>
              </Tr>
              <Tr>
                <Td>Alasan</Td>
                <Td>:</Td>
                <Td>{detail.alasan}</Td>
              </Tr>
              <Tr>
                <Td>Status</Td>
                <Td>:</Td>
                <Td>{status[detail.status]}</Td>
                {/* <Td>{Detailstatus}</Td> */}
              </Tr>
            </Tbody>
          </Table>
          <Card border={"0px"} borderColor={"blackAlpha.300"}>
            <CardBody>
              <Flex>
                <Spacer />
                <div>
                  <Button onClick={() => navigate("/hr/cuti")}>Back</Button>
                </div>
              </Flex>
            </CardBody>
          </Card>
        </TableContainer>
      )}
    </Layout>
  );
};

export default DetailCutiHR;
