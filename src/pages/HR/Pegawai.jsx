import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Flex,
  Spacer,
  Button,
  HStack,
} from "@chakra-ui/react";
import Layout from "../../components/Dashboard/Layout";
import { getAllProfile } from "../../services/profileService";
import { useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi";
import { FiTrash2 } from "react-icons/fi";
import { MdVisibility } from "react-icons/md";

const Pegawai = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllProfile().then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <Layout>
      <Heading>Pegawai</Heading>
      <Flex>
        <Spacer />
        <Button onClick={() => navigate("/hr/pegawai/create")}>
          Tambah Pegawai
        </Button>
      </Flex>
      <TableContainer mt={8}>
        <Table variant="simple">
          <TableCaption>List Pegawai</TableCaption>
          <Thead>
            <Tr>
              <Th>Nama</Th>
              <Th>NIP</Th>
              <Th>Email</Th>
              <Th>Unit Kerja</Th>
              <Th>Jabatan</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.nama}</Td>
                  <Td>{item.nip}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.kodeunit}</Td>
                  <Td>{item.jabatan}</Td>
                  <Td>
                    <HStack>
                      <MdVisibility
                        onClick={() =>
                          navigate(`/hr/pegawai/detail/${item.userid}`)
                        }
                      />
                      <AiFillEdit />
                      <FiTrash2 />
                    </HStack>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Pegawai;
