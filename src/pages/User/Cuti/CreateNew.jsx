import { Button, Heading, Select, Table, TableContainer, Tbody, Td, Textarea, Tr, useToast } from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../components/Dashboard/Layout';
import { getAllJenisCuti } from '../../../services/jenisCutiService';
import { insertTrxCuti, getAllTrxCuti, getTrxCutiById, updateTrxCuti } from '../../../services/trxCutiService';
import useGlobal from '../../../store/global';

const CreateNew = () => {
  const session = useGlobal((state) => state.session);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [durasiCuti, setDurasiCuti] = useState(0);
  const [jenisCuti, setJenisCuti] = useState([]);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const toast = useToast({
    position: 'top',
  });
  useEffect(() => {
    const durasi = endDate.getDate() - startDate.getDate() + 1;
    setDurasiCuti(durasi);
  }, [startDate, endDate]);

  useEffect(() => {
    getAllJenisCuti().then((res) => {
      console.log(res.data);
      setJenisCuti(res.data);
    });
  }, []);

  const onSubmit = (data) => {
    const payload = {
      ...data,
      tanggalmulai: startDate,
      tanggalakhir: endDate,
      userid: session.userid,
      durasi: durasiCuti,
      status: 1,
    };
    insertTrxCuti(payload)
      .then((res) => {
        console.log(res);
        toast({
          title: 'Success.',
          description: 'Permintaan cuti berhasil dibuat.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        navigate('/cuti');
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: 'Error.',
          description: 'Terjadi kesalahan, silakan coba lagi dalam beberapa saat.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });
  };
  return (
    <Layout>
      <Heading>Input Cuti</Heading>
      <TableContainer mt={8} w={800}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Table variant='simple'>
            <Tbody>
              <Tr>
                <Td w={'40%'}>Jenis Cuti</Td>
                <Td w={'1%'}>:</Td>
                <Td>
                  <Select placeholder='Jenis Cuti' {...register('idjenisCUti', { required: true })}>
                    {/* <option value='option1'>Block Leave</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option> */}
                    {jenisCuti && jenisCuti.map((item) => <option value={item.id}>{item.namacuti}</option>)}
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Sisa Cuti</Td>
                <Td>:</Td>
                <Td>5 Hari</Td>
              </Tr>
              <Tr>
                <Td>Tanggal Mulai</Td>
                <Td>:</Td>
                <Td>
                  <SingleDatepicker name='date-input' date={startDate} onDateChange={setStartDate} />
                </Td>
              </Tr>
              <Tr>
                <Td>Tanggal Selesai</Td>
                <Td>:</Td>
                <Td>
                  {' '}
                  <SingleDatepicker name='date-input' date={endDate} onDateChange={setEndDate} />
                </Td>
              </Tr>
              <Tr>
                <Td>Durasi</Td>
                <Td>:</Td>
                <Td>{durasiCuti} Hari</Td>
              </Tr>
              <Tr>
                <Td valign='top'>Alasan</Td>
                <Td valign='top'>:</Td>
                <Td valign='top'>
                  <Textarea placeholder='Alasan cuti' {...register('alasan', { required: true })} />
                </Td>
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
          <Button colorScheme='teal' size='md' type='submit'>
            Submit
          </Button>
        </form>
      </TableContainer>
    </Layout>
  );
};

export default CreateNew;
