import { Button, Flex, Heading, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import New from '../../../components/Cuti/User/New';
import Approved from '../../../components/Cuti/User/Approved';
import Rejected from '../../../components/Cuti/User/Rejected';
import Canceled from '../../../components/Cuti/User/Cancel';
import History from '../../../components/Cuti/User/History';
import Layout from '../../../components/Dashboard/Layout';
import { getTrxCutiByUserId } from '../../../services/trxCutiService';
import useGlobal from '../../../store/global';

const Cuti = () => {
  const session = useGlobal((state) => state.session);
  const navigate = useNavigate();
  const [listAll, setListAll] = useState([]);
  const [listNew, setListNew] = useState([]);
  const [listApproved, setListApproved] = useState([]);
  const [listRejected, setListRejected] = useState([]);
  const [listCanceled, setListCanceled] = useState([]);
  useEffect(() => {
    getTrxCutiByUserId(session.userid).then((res) => {
      setListAll(res.data);
      setListNew(res.data.filter((item) => item.status === '1'));
      setListApproved(res.data.filter((item) => item.status === '2'));
      setListRejected(res.data.filter((item) => item.status === '3'));
      setListCanceled(res.data.filter((item) => item.status === '4'));
    });
  }, []);
  return (
    <Layout>
      <Heading>Cuti</Heading>
      <Flex>
        <Spacer />
        <Button onClick={() => navigate('/cuti/create')}>Create New</Button>
      </Flex>
      <Tabs variant='enclosed' mt={8}>
        <TabList>
          <Tab>New</Tab>
          <Tab>Approved</Tab>
          <Tab>Rejected</Tab>
          <Tab>Cancelled Request</Tab>
          <Tab>History</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>{listNew.length > 0 && <New data={listNew} />}</TabPanel>
          <TabPanel>{listApproved.length > 0 && <Approved data={listApproved} />}</TabPanel>
          <TabPanel>{listRejected.length > 0 && <Rejected data={listRejected} />}</TabPanel>
          <TabPanel>{listCanceled.length > 0 && <Canceled data={listCanceled} />}</TabPanel>
          <TabPanel>{listAll.length > 0 && <History data={listAll} />}</TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default Cuti;
