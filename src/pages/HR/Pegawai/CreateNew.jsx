import {
  Button,
  Heading,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  useToast,
  h1,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/Dashboard/Layout";
import { insertProfile } from "../../../services/profileService";
import {
  getAllAgama,
  getAllUnit,
  getAllJabatan,
  getAllRole,
  getAllProvinsi,
  getAllKota,
  getAllKecamatan,
  getAllKelurahan,
} from "../../../services/masterservice";

const CreateNewPegawai = () => {
  const navigate = useNavigate();
  const [tanggallahir, setTanggalLahir] = useState(new Date());
  const [listAgama, setListAgama] = useState([]);
  const [listUnit, setListUnit] = useState([]);
  const [listJabatan, setListJabatan] = useState([]);
  const [listRole, setListRole] = useState([]);
  const [listProvinsi, setListProvinsi] = useState([]);
  const [listKota, setListKota] = useState([]);
  const [listKecamatan, setListKecamatan] = useState([]);
  const [listKelurahan, setListKelurahan] = useState([]);

  useEffect(() => {
    getAllAgama().then((res) => setListAgama(res.data));
    getAllUnit().then((res) => setListUnit(res.data));
    getAllJabatan().then((res) => setListJabatan(res.data));
    getAllRole().then((res) => setListRole(res.data));
    getAllProvinsi().then((res) => setListProvinsi(res.data));
    getAllKota().then((res) => setListKota(res.data));
    getAllKecamatan().then((res) => setListKecamatan(res.data));
    getAllKelurahan().then((res) => setListKelurahan(res.data));
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const toast = useToast({
    position: "top",
  });
  const onSubmit = (value) => {
    const payload = {
      ...value,
      tanggallahir,
    };
    insertProfile(payload)
      .then((res) => {
        console.log(res);
        toast({
          title: "Success.",
          description: "Pegawai berhasil dibuat.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/hr/pegawai");
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error.",
          description: "Terjadi kesalahan.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  return (
    <Layout>
      <Heading>Tambah Pegawai</Heading>
      <TableContainer mt={8} w={800}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td w={"40%"}>User ID</Td>
                <Td w={"1%"}>:</Td>
                <Td>
                  <Input
                    type="text"
                    {...register("userid", { required: true })}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td w={"40%"}>Nip</Td>
                <Td w={"1%"}>:</Td>
                <Td>
                  <Input type="text" {...register("nip", { required: true })} />
                </Td>
              </Tr>
              <Tr>
                <Td>Nama</Td>
                <Td>:</Td>
                <Td>
                  <Input
                    type="text"
                    {...register("nama", { required: true })}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Email</Td>
                <Td>:</Td>
                <Td>
                  <Input
                    type="email"
                    {...register("email", { required: true })}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Tempat Lahir</Td>
                <Td>:</Td>
                <Td>
                  <Input
                    type="text"
                    {...register("tempatlahir", { required: true })}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Tanggal Lahir</Td>
                <Td>:</Td>
                <Td>
                  <SingleDatepicker
                    name="date-input"
                    date={tanggallahir}
                    onDateChange={setTanggalLahir}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Jenis Kelamin</Td>
                <Td>:</Td>
                <Td>
                  <Select
                    placeholder="Pilih jenis kelamin"
                    {...register("jeniskelamin", { required: true })}
                  >
                    <option value={1}>Laki-laki</option>
                    <option value={2}>Perempuan</option>
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Nomor Telp</Td>
                <Td>:</Td>
                <Td>
                  <Input
                    type="text"
                    {...register("telp", { required: true })}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Status Pernikahan</Td>
                <Td>:</Td>
                <Td>
                  <Select
                    placeholder="Pilih Status Pernikahan"
                    {...register("statusnikah", { required: true })}
                  >
                    <option value={1}>Menikah</option>
                    <option value={2}>Tidak menikah</option>
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Agama</Td>
                <Td>:</Td>
                <Td>
                  <Select
                    placeholder="Pilih Agama"
                    {...register("agama", { required: true })}
                  >
                    {/* <option value={1}>Islam</option>
                    <option value={2}>Kristen Protestan</option>
                    <option value={3}>Kristen Katolik</option>
                    <option value={4}>Hindu</option>
                    <option value={5}>Budha</option>
                    <option value={6}>Konghuchu</option> */}
                    {listAgama.map((item) => (
                      <option key={item.id} value={item.kodeagama}>
                        {item.agama}
                      </option>
                    ))}
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Role</Td>
                <Td>:</Td>
                <Td>
                  <Select
                    placeholder="Pilih Role"
                    {...register("roleId", { required: true })}
                  >
                    {/* <option value={1}>User</option>
                    <option value={2}>HR</option> */}
                    {listRole.map((item) => (
                      <option key={item.id} value={item.roleId}>
                        {item.roleName}
                      </option>
                    ))}
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Unit Kerja</Td>
                <Td>:</Td>
                <Td>
                  <Select
                    placeholder="Pilih Unit Kerja"
                    {...register("kodeunit", { required: true })}
                  >
                    {/* <option value={1}>Divisi Human Capital</option>
                    <option value={2}>Divisi Information Technology</option>
                    <option value={3}>Divisi Umum</option>
                    <option value={4}>Divisi Hukum</option> */}
                    {listUnit.map((item) => (
                      <option key={item.id} value={item.kodeunit}>
                        {item.namaunit}
                      </option>
                    ))}
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Jabatan</Td>
                <Td>:</Td>
                <Td>
                  <Select
                    placeholder="Pilih Jabatan"
                    {...register("jabatan", { required: true })}
                  >
                    {/* <option value={1}>Staff</option>
                    <option value={2}>Officer</option>
                    <option value={3}>Manager</option>
                    <option value={4}>Group Head</option> */}
                    {listJabatan.map((item) => (
                      <option key={item.id} value={item.kodejabatan}>
                        {item.namajabatan}
                      </option>
                    ))}
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Alamat</Td>
                <Td>:</Td>
                <Td>
                  <Input
                    type="textarea"
                    {...register("alamat", { required: true })}
                  />
                </Td>
              </Tr>

              <Tr>
                <Td>Provinsi</Td>
                <Td>:</Td>
                <Td>
                  <Select
                    placeholder="Pilih Provinsi"
                    {...register("kodeprovinsi", { required: true })}
                  >
                    {listProvinsi.map((item) => (
                      <option key={item.id} value={item.kodeprovinsi}>
                        {item.provinsi}
                      </option>
                    ))}
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Kota</Td>
                <Td>:</Td>
                <Td>
                  <Select
                    placeholder="Pilih Kota"
                    {...register("kodekota", { required: true })}
                  >
                    {listKota.map((item) => (
                      <option key={item.id} value={item.kodekota}>
                        {item.kota}
                      </option>
                    ))}
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Kecamatan</Td>
                <Td>:</Td>
                <Td>
                  <Select
                    placeholder="Pilih Kecamatan"
                    {...register("kodekecamatan", { required: true })}
                  >
                    {listKecamatan.map((item) => (
                      <option key={item.id} value={item.kodekecamatan}>
                        {item.kecamatan}
                      </option>
                    ))}
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>Kelurahan</Td>
                <Td>:</Td>
                <Td>
                  <Select
                    placeholder="Pilih Kelurahan"
                    {...register("kodekelurahan", { required: true })}
                  >
                    {listKelurahan.map((item) => (
                      <option key={item.id} value={item.kodekelurahan}>
                        {item.kelurahan}
                      </option>
                    ))}
                  </Select>
                </Td>
              </Tr>
              <Tr>
                <Td>RT</Td>
                <Td>:</Td>
                <Td>
                  <Input
                    type="Number"
                    {...register("rt", { required: true })}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>RW</Td>
                <Td>:</Td>
                <Td>
                  <Input
                    type="Number"
                    {...register("rw", { required: true })}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Kode Pos</Td>
                <Td>:</Td>
                <Td>
                  <Input
                    type="Number"
                    {...register("kodepos", { required: true })}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Button mt={4} colorScheme="green" type="submit">
            Simpan
          </Button>
        </form>
      </TableContainer>
    </Layout>
  );
};

export default CreateNewPegawai;
