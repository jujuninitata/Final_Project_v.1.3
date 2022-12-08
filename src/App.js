import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import HeroSection from "./components/LandingPage/HeroSection";
import Layout from "./components/LandingPage/Layout";
import Features from "./components/LandingPage/Features";
import SplitWithImage from "./components/LandingPage/Features2";
import Footer from "./components/LandingPage/Footer";
import CTA from "./components/LandingPage/CTA";
import { checkToken } from "./helpers/session";
import useGlobal from "./store/global";
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const setSession = useGlobal((state) => state.setSession);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = checkToken();
    if (isLoggedIn) {
      // setSession(isLoggedIn);
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Layout>
      <Box bg="gray.50" w="full">
        <HeroSection />
        {/* <Features /> */}
        <SplitWithImage />
        <CTA />
        <Footer />
      </Box>
    </Layout>
  );
}

export default App;
