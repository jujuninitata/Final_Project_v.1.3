import {
  Box,
  Flex,
  Icon,
  useDisclosure,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Menu,
  MenuButton,
  HStack,
  VStack,
  MenuList,
  MenuItem,
  MenuDivider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Stack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MdHome } from "react-icons/md";
import {
  FaBell,
  FaPlaneDeparture,
  FaPencilAlt,
  FaUserAlt,
} from "react-icons/fa";

import {
  BsBriefcaseFill,
  BsFillInboxFill,
  BsFillCalendar2EventFill,
  BsCalendarWeekFill,
  BsFillClockFill,
} from "react-icons/bs";
import { FiChevronDown, FiMenu, FiSearch } from "react-icons/fi";
import { logout } from "../../services/authService";
import useGlobal from "../../store/global";
import {
  getAllTrxCuti,
  getTrxCutiByUserId,
} from "../../services/trxCutiService";
import { checkToken } from "../../helpers/session";

const employeeNav = [
  {
    title: "Home",
    icon: MdHome,
    link: "/home",
  },
  {
    title: "Inbox",
    icon: BsFillInboxFill,
    link: "/inbox",
  },
  {
    title: "Profile",
    icon: FaUserAlt,
    link: "/employee",
  },
  {
    title: "Business Action",
    icon: BsBriefcaseFill,
    links: [
      {
        title: "Perjalanan Dinas",
        icon: FaPlaneDeparture,
        link: "/perdin",
      },
      {
        title: "Diklat",
        icon: FaPencilAlt,
        link: "/diklat",
      },
      {
        title: "Izin",
        icon: BsFillCalendar2EventFill,
        link: "/izin",
      },
      {
        title: "Cuti",
        icon: BsCalendarWeekFill,
        link: "/cuti",
      },
      {
        title: "Lembur",
        icon: BsFillClockFill,
        link: "/lembur",
      },
    ],
  },
];

const hrNav = [
  {
    title: "Home",
    icon: MdHome,
    link: "/home",
  },
  {
    title: "Inbox",
    icon: BsFillInboxFill,
    link: "/inbox",
  },
  {
    title: "Profile",
    icon: FaUserAlt,
    link: "/employee",
  },
  {
    title: "Business Action",
    icon: BsBriefcaseFill,
    links: [
      {
        title: "Pegawai",
        icon: FaUserAlt,
        link: "/hr/pegawai",
      },
      {
        title: "Perjalanan Dinas",
        icon: FaPlaneDeparture,
        link: "/hr/perdin",
      },
      {
        title: "Diklat",
        icon: FaPencilAlt,
        link: "/hr/diklat",
      },
      {
        title: "Izin",
        icon: BsFillCalendar2EventFill,
        link: "/hr/izin",
      },
      {
        title: "Cuti",
        icon: BsCalendarWeekFill,
        link: "/hr/cuti",
      },
      {
        title: "Lembur",
        icon: BsFillClockFill,
        link: "/hr/lembur",
      },
    ],
  },
];

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [listCuti, setListCuti] = useState([]);
  const session = useGlobal((state) => state.session);
  const setSession = useGlobal((state) => state.setSession);
  const sidebar = useDisclosure();
  //get current path
  const path = window.location.pathname;
  // console.log(path);
  useEffect(() => {
    const isLoggedIn = checkToken();
    if (isLoggedIn) {
      setSession(isLoggedIn);
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    console.log(session?.role);
    const fetchData = async () => {
      if (session?.role.toLowerCase() === "user") {
        const { data } = await getTrxCutiByUserId(session.userid);
        const filteredData = data.filter(
          (item) => item.status === "2" || item.status === "3"
        );
        // console.log(filteredData);
        setListCuti(filteredData);
      } else {
        const { data } = await getAllTrxCuti();
        const filteredData = data.filter((item) => item.status === "1");
        // console.log(filteredData);
        setListCuti(filteredData);
      }
      // setListCuti(data);
    };

    if (session?.role !== undefined) {
      fetchData();
    }
    // console.log(session);
  }, [session]);

  const NavGroup = (props) => {
    const { icon, children, ...rest } = props;

    return (
      <Flex
        align="center"
        px="4"
        mx="2"
        rounded="md"
        py="3"
        cursor="pointer"
        color="gray.200"
        _hover={{
          bg: "blackAlpha.300",
          color: "whiteAlpha.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mr="2"
            boxSize="4"
            _groupHover={{
              color: "gray.300",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const NavItem = (props) => {
    const { icon, children, link, ...rest } = props;
    const isActive = path === link;
    return (
      <Link to={link}>
        <Flex
          align="center"
          bg={isActive ? "blackAlpha.300" : "transparent"}
          px="4"
          mx="2"
          rounded="md"
          py="3"
          cursor="pointer"
          color="gray.200"
          _hover={{
            bg: "blackAlpha.300",
            color: "whiteAlpha.900",
          }}
          role="group"
          fontWeight="semibold"
          transition=".15s ease"
          {...rest}
        >
          {icon && (
            <Icon
              mr="2"
              boxSize="4"
              _groupHover={{
                color: "gray.300",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    );
  };

  const renderEmployeeNav = () => {
    return employeeNav.map((item, index) => {
      if (item.links) {
        return (
          <Accordion allowMultiple borderStyle={"none"} key={index}>
            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton fontSize={"sm"} p={0} w={"full"}>
                  <Box flex="1" textAlign="left">
                    <NavGroup icon={item.icon}>{item.title}</NavGroup>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel>
                {item.links.map((link, index) => (
                  <NavItem icon={link.icon} link={link.link} key={index}>
                    {link.title}
                  </NavItem>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      } else {
        return (
          <NavItem icon={item.icon} link={item.link} key={index}>
            {item.title}
          </NavItem>
        );
      }
    });
  };

  const renderHrNav = () => {
    return hrNav.map((item, index) => {
      if (item.links) {
        return (
          <Accordion allowMultiple borderStyle={"none"} key={index}>
            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton fontSize={"sm"} p={0} w={"full"}>
                  <Box flex="1" textAlign="left">
                    <NavGroup icon={item.icon}>{item.title}</NavGroup>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel>
                {item.links.map((link, index) => (
                  <NavItem icon={link.icon} link={link.link} key={index}>
                    {link.title}
                  </NavItem>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      } else {
        return (
          <NavItem icon={item.icon} link={item.link} key={index}>
            {item.title}
          </NavItem>
        );
      }
    });
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="brand.700"
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        {/* <Logo /> */}
        <Text fontSize="2xl" ml="2" color="white" fontWeight="semibold">
          Logo
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        {session?.role.toLowerCase() === "user"
          ? renderEmployeeNav()
          : renderHrNav()}
      </Flex>
    </Box>
  );

  return (
    <Box
      as="section"
      bg="gray.50"
      _dark={{
        bg: "gray.700",
      }}
      minH="100vh"
    >
      <SidebarContent
        display={{
          base: "none",
          md: "unset",
        }}
      />
      {session && (
        <>
          <Drawer
            isOpen={sidebar.isOpen}
            onClose={sidebar.onClose}
            placement="left"
          >
            <DrawerOverlay />
            <DrawerContent>
              <SidebarContent w="full" borderRight="none" />
            </DrawerContent>
          </Drawer>
          <Box
            ml={{
              base: 0,
              md: 60,
            }}
            transition=".3s ease"
          >
            <Flex
              as="header"
              align="center"
              justify="space-between"
              w="full"
              px="4"
              bg="white"
              _dark={{
                bg: "gray.800",
              }}
              borderBottomWidth="1px"
              borderColor="blackAlpha.300"
              h="14"
            >
              <IconButton
                aria-label="Menu"
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
                onClick={sidebar.onOpen}
                icon={<FiMenu />}
                size="sm"
              />
              <InputGroup
                w="96"
                display={{
                  base: "none",
                  md: "flex",
                }}
              >
                <InputLeftElement color="gray.500">
                  <FiSearch />
                </InputLeftElement>
                <Input placeholder="Search People ..." />
              </InputGroup>

              <HStack spacing={{ base: "0", md: "6" }}>
                <Text fontSize="sm">Welcome, {session?.nama}</Text>
                {/* <Icon color='gray.500' as={FaBell} cursor='pointer' /> */}
                {/* <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<FaBell />}
                    variant="outline"
                  />
                  <MenuList>
                    <MenuItem>
                      <Card>
                        <Badge variant="solid" colorScheme="green">
                          Pengajuan cuti diapprove
                        </Badge>
                        Pengajuan cuti anda telah diapprove oleh HR
                      </Card>
                    </MenuItem>
                    <MenuItem>New Window</MenuItem>
                    <MenuDivider />
                    <MenuItem>Open...</MenuItem>
                    <MenuItem>Save File</MenuItem>
                  </MenuList>
                </Menu> */}
                {/* <Popover placement="top-start">
                  <PopoverTrigger>
                    <Icon color="gray.500" as={FaBell} cursor="pointer" />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader fontWeight="semibold">
                      Notification
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Box>
                        <Badge variant="solid" colorScheme="green">
                          Pengajuan cuti diapprove
                        </Badge>
                        <Text>Pengajuan cuti anda telah diapprove oleh HR</Text>
                      </Box>
                      <Box>
                        <Badge variant="solid" colorScheme="red">
                          Pengajuan cuti anda ditolak
                        </Badge>
                        <Text>Pengajuan cuti anda ditolak oleh HR</Text>
                      </Box>
                    </PopoverBody>
                  </PopoverContent>
                </Popover> */}
                <Popover>
                  <PopoverTrigger>
                    <IconButton aria-label="Search database" icon={<FaBell />}>
                      <Icon viewBox="0 0 200 200" color="red.500">
                        <path
                          fill="currentColor"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                        />
                      </Icon>
                    </IconButton>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Notification</PopoverHeader>
                    <PopoverBody>
                      <Stack spacing={4}>
                        {listCuti.map((item) => (
                          <Box
                            key={item.id}
                            onClick={() =>
                              navigate(
                                item.status === "1"
                                  ? `/hr/cuti/approval/${item.idcuti}`
                                  : `/cuti/detail/${item.idcuti}`
                              )
                            }
                            cursor="pointer"
                          >
                            <Badge
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
                            </Badge>
                            <Text>
                              {item.status === "1"
                                ? `${item.nama} mengajukan permohonan cuti dengan
                              alasan ${item.alasan}`
                                : item.status === "2"
                                ? `Pengajuan cuti ${item.alasan} telah diapprove oleh HR`
                                : `Pengajuan cuti ${item.alasan} telah ditolak oleh HR`}
                            </Text>
                          </Box>
                        ))}
                      </Stack>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>

                <Flex alignItems={"center"}>
                  <Menu>
                    <MenuButton
                      py={2}
                      transition="all 0.3s"
                      _focus={{ boxShadow: "none" }}
                    >
                      <HStack>
                        <Avatar
                          size={"sm"}
                          src={
                            "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                          }
                        />
                        <VStack
                          display={{ base: "none", md: "flex" }}
                          alignItems="flex-start"
                          spacing="1px"
                          ml="2"
                        >
                          <Text fontSize="sm">{session?.nama}</Text>
                          <Text fontSize="xs" color="gray.600">
                            {session?.email}
                          </Text>
                        </VStack>
                        <Box display={{ base: "none", md: "flex" }}>
                          <FiChevronDown />
                        </Box>
                      </HStack>
                    </MenuButton>
                    <MenuList bg={"white"} borderColor={"gray.200"}>
                      <Link to={"/employee"}>
                        <MenuItem>Profile</MenuItem>
                      </Link>
                      <MenuItem>Settings</MenuItem>
                      <MenuItem>Inbox</MenuItem>
                      <MenuDivider />
                      <Link
                        onClick={() => {
                          logout();
                          setSession(null);
                        }}
                      >
                        <MenuItem>Sign Out</MenuItem>
                      </Link>
                    </MenuList>
                  </Menu>
                </Flex>
              </HStack>
            </Flex>

            <Box as="main" p="4">
              {/* <Breadcrumb mb={4}>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb> */}
              {children}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Layout;
