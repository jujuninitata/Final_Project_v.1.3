import React from "react";
import { GoogleLogin } from "react-google-login";
import useGlobal from "../../store/global";
import { Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../../services/authService";
import Cookies from "js-cookie";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
// const clientId =
//   "835900175009-tlp5g2fmljh20fff1enpjr5ctaljiqe7.apps.googleusercontent.com";

const LoginGoogle = () => {
  const navigate = useNavigate();
  const toast = useToast({
    position: "top",
  });
 
  const setGoogleMail = useGlobal((state) => state.setGoogleMail);
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    loginWithGoogle({ email: res.profileObj.email })
      .then((res) => {
        console.log(res);
        setGoogleMail(null);
        if (res) {
          Cookies.set("token", res.token);
          toast({
            title: "Success.",
            description: "Login berhasil.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          navigate("/home");
        }
      })
      .catch((err) => {
        setGoogleMail(res.profileObj.email);
        navigate("/register/google");
      });
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢`);
  };
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      style={{ marginTop: "100px" }}
      // isSignedIn={true}
      render={(renderProps) => (
        <Button
          onClick={renderProps.onClick}
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
        >
          Login with Google
        </Button>
      )}
    />
  );
};

export default LoginGoogle;
