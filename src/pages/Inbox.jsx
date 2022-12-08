import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Spacer,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../components/Dashboard/Layout";
import useGlobal from "../store/global";
import { useNavigate } from "react-router-dom";
import { getAllTrxCuti, getTrxCutiByUserId } from "../services/trxCutiService";

const Inbox = () => {
  const session = useGlobal((state) => state.session);
  const navigate = useNavigate();
  const [listInbox, setListInbox] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (session.role.toLowerCase() == "user") {
        const { data } = await getTrxCutiByUserId(session.userid);
        const filteredData = data.filter(
          (item) => item.status == "2" || item.status == "3"
        );
        console.log(filteredData);
        setListInbox(filteredData);
      } else {
        const { data } = await getAllTrxCuti();
        const filteredData = data.filter((item) => item.status == "1");
        console.log(filteredData);
        setListInbox(filteredData);
      }
      // setListCuti(data);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <Heading>Inbox</Heading>
      <Stack spacing={8} mt={8}>
        {listInbox &&
          listInbox.map((item) => (
            <Card key={item.id}>
              <CardBody>
                <Stack spacing={4}>
                  <Heading as="h4" size="md">
                    {item.nama}
                  </Heading>
                  <Text>
                    {item.jeniscuti} dari tanggal{" "}
                    {item.tanggalmulai.substring(0, 10)} -{" "}
                    {item.tanggalakhir.substring(0, 10)}
                  </Text>
                </Stack>
                <Flex mt={8} alignItems="center">
                  <Box>
                    <Tag
                      size={"lg"}
                      key={"md"}
                      variant="solid"
                      colorScheme={
                        item.status === "1"
                          ? "cyan"
                          : item.status === "2"
                          ? "green"
                          : "red"
                      }
                    >
                      {item.status === "1"
                        ? "Permohonan cuti baru"
                        : item.status === "2"
                        ? "Pengajuan cuti diapprove"
                        : "Pengajuan cuti ditolak"}
                    </Tag>
                  </Box>
                  <Spacer />
                  <Box>
                    <HStack>
                      <Button
                        colorScheme="blue"
                        onClick={() =>
                          navigate(
                            item.status === "1"
                              ? `/hr/cuti`
                              : `/cuti/detail/${item.idcuti}`
                          )
                        }
                      >
                        Detail
                      </Button>
                    </HStack>
                  </Box>
                </Flex>
              </CardBody>
            </Card>
          ))}
      </Stack>
    </Layout>
  );
};

export default Inbox;
