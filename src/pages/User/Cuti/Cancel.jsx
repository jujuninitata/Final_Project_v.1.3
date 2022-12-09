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
} from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../../components/Dashboard/Layout';
import { getTrxCutiDetail } from '../../../services/trxCutiService';
import { cancelCuti } from '../../../services/trxCutiService';
import useGlobal from '../../../store/global';

const Cancel = () => {
  const session = useGlobal((state) => state.session);
  let { cutiId } = useParams();
  const [detail, setDetail] = useState({});
  const [catatan, setCatatan] = useState(null);
  const toast = useToast({
    position: 'top',
  });
  const navigate = useNavigate();
  useEffect(() => {
    getTrxCutiDetail(cutiId).then((res) => {
     // console.log(res.data);
      setDetail(res.data);
    });
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setCatatan(value);
  };

  
  const handleCancel = () => {
    const payload = {
      alasan: catatan,
    };
    cancelCuti(cutiId, payload).then((res) => {
      //console.log(res);
      toast({
        title: 'Success.',
        description: 'Pengajuan berhasil Diaancel.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/cuti');
      // window.location.reload();
    });
  };


  return (
    <Layout>
      <Heading>Pembatalan Pengajuan Cuti</Heading>
      {detail && (
        <TableContainer mt={8} w={800}>
          <Table variant='simple'>
            <Tbody>
              <Tr>
                <Td>Nama Pegawai</Td>
                <Td>:</Td>
                <Td>{detail.nama}</Td>
              </Tr>
              <Tr>
                <Td w={'40%'}>Nip</Td>
                <Td w={'1%'}>:</Td>
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
                  {detail.tanggalmulai?.substring(0, 10)} - {detail.tanggalakhir?.substring(0, 10)}
                </Td>
              </Tr>
              <Tr>
                <Td>Durasi</Td>
                <Td>:</Td>
                <Td>{detail.durasi} Hari</Td>
              </Tr>
              {/* <Tr>
                <Td>Sisa Cuti Setelah Pengajuan</Td>
                <Td>:</Td>
                <Td>{detail.sisacuti - detail.durasi} Hari</Td>
              </Tr> */}
              <Tr>
                <Td>Alasan</Td>
                <Td>:</Td>
                <Td>{detail.alasan}</Td>
              </Tr>
            </Tbody>
            {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
          </Table>
          <Card border={'1px'} borderColor={'blackAlpha.300'}>
            <CardBody>
              <Table variant='simple'>
                <Tbody>
                  <Tr>
                    <Td valign='top'>Alasan Pembatalan</Td>
                    <Td valign='top'>:</Td>
                    <Td valign='top'>
                      <Textarea onChange={handleChange} border={'1px'} placeholder='' />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
              <Flex>
                <Spacer />
                <div>
                  <Button onClick={() => navigate('/cuti')}>Back</Button>
                  
                  <Button colorScheme='red' ml={4} onClick={() => handleCancel()}>
                    Cancel
                  </Button>
                </div>
              </Flex>
            </CardBody>
          </Card>
        </TableContainer>
      )}
    </Layout>
  );
};

export default Cancel;
