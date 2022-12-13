import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,

} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
// import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { useEffect, useState } from "react";
// import { useGoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import LoginGoogle from "../components/LoginGoogle";
import useGlobal from "../store/global";

const clientId = process.env.GOOGLE_CLIENT_ID;;

export default function Login() {
  const setSession = useGlobal((state) => state.setSession);
  const googleMail = useGlobal((state) => state.googleMail);
  const setGoogleMail = useGlobal((state) => state.setGoogleMail);
  const {
    handleSubmit,
    register,
   // formState: { errors, isSubmitting },
  } = useForm();
  // const { signOut } = useGoogleLogout({
  //   clientId,
  //   onLogoutSuccess: () => alert("Logout made successfully"),
  // });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast({
    position: "top",
  });
  const handleLogin = async (values) => {
    setLoading(true);
    login(values)
      .then(() => {
        setLoading(false);
        toast({
          title: "Success.",
          description: "Login berhasil.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/home");
      })
      .catch((err) => {
        setLoading(false);
        toast({
          title: "Error.",
          description: err.response.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    setSession(null);
    if (googleMail) {
      // signOut();
      setGoogleMail(null);
    }
  }, []);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(handleLogin)}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  {...register("email", { required: true })}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  {...register("password", { required: true })}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"} onClick={() => navigate("/forgotpassword")}>Forgot password?</Link>
                </Stack>
                {/* <Link style={{ textDecoration: 'none' }} as={RouterLink} to={'/home'}> */}
                <Button
                  type="submit"
                  isLoading={loading}
                  loadingText="Submitting"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign In
                </Button>
                {/* </Link> */}
              </Stack>
              <Stack>
                <Stack align={"center"}>
                  <Text>Or</Text>
                </Stack>

                {/* <Button
                  onClick={() => navigate("/loginGoogle")}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Login Google
                </Button> */}
                <LoginGoogle />
                {/* </Link> */}
              </Stack>
            </form>
          </Stack>
          <Stack pt={6}>
            <Text align={"center"}>
              Don't have an account?{" "}
              <Link color={"blue.400"} onClick={() => navigate("/register")}>
                Register
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
