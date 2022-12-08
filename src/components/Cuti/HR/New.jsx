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
import React from "react";
import { useNavigate } from "react-router-dom";

const New = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Stack spacing={8}>
      {data &&
        data.map((item) => (
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
                    colorScheme="cyan"
                  >
                    Permohonan Cuti Baru
                  </Tag>
                </Box>
                <Spacer />
                <Box>
                  <HStack>
                    <Button
                      colorScheme="green"
                      onClick={() =>
                        navigate(`/hr/cuti/approval/${item.idcuti}`)
                      }
                    >
                      Persetujuan
                    </Button>
                    <Button
                      colorScheme="blue"
                      onClick={() => navigate(`/hr/cuti/detail/${item.idcuti}`)}
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
  );
};

export default New;
