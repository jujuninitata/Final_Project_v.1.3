import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import App from "./App";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Employee from "./pages/Employee";
import Perdin from "./pages/User/Perdin";
import Diklat from "./pages/User/Diklat";
import Izin from "./pages/User/Izin";
import Cuti from "./pages/User/Cuti/Cuti";
import CreateNew from "./pages/User/Cuti/CreateNew";
import Lembur from "./pages/User/Lembur";
import CutiHR from "./pages/HR/Cuti/Cuti";
import IzinHR from "./pages/HR/Izin";
import LemburHR from "./pages/HR/Lembur";
import PerdinHR from "./pages/HR/Perdin";
import DiklatHR from "./pages/HR/Diklat";
import Pegawai from "./pages/HR/Pegawai";
import Approval from "./pages/HR/Cuti/Approval";
import CreateNewPegawai from "./pages/HR/Pegawai/CreateNew";
import RegisterGoogle from "./pages/RegisterGoogle";
import DetailCuti from "./pages/User/Cuti/detail";
import CancelCuti from "./pages/User/Cuti/Cancel";
import DetailCutiHR from "./pages/HR/Cuti/detail";
import DetailUser from "./pages/HR/PegawaiDetail";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f0e4ff",
      100: "#cbb2ff",
      200: "#a480ff",
      300: "#7a4dff",
      400: "#641bfe",
      500: "#5a01e5",
      600: "#5200b3",
      700: "#430081",
      800: "#2d004f",
      900: "#14001f",
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register/google",
    element: <RegisterGoogle />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/employee",
    element: <Employee />,
  },
  {
    path: "/inbox",
    element: <Inbox />,
  },
  {
    path: "/perdin",
    element: <Perdin />,
  },
  {
    path: "/diklat",
    element: <Diklat />,
  },
  {
    path: "/izin",
    element: <Izin />,
  },
  {
    path: "/cuti",
    element: <Cuti />,
  },
  {
    path: "/cuti/detail/:cutiId",
    element: <DetailCuti />,
  },
  {
    path: "/cuti/cancel/:cutiId",
    element: <CancelCuti />,
  },
  {
    path: "/cuti/create",
    element: <CreateNew />,
  },
  {
    path: "/lembur",
    element: <Lembur />,
  },
  {
    path: "/hr/perdin",
    element: <PerdinHR />,
  },
  {
    path: "/hr/diklat",
    element: <DiklatHR />,
  },
  {
    path: "/hr/izin",
    element: <IzinHR />,
  },
  {
    path: "/hr/cuti",
    element: <CutiHR />,
  },
  {
    path: "/hr/cuti/approval/:cutiId",
    element: <Approval />,
  },
  {
    path: "/hr/cuti/detail/:cutiId",
    element: <DetailCutiHR />,
  },
  {
    path: "/hr/lembur",
    element: <LemburHR />,
  },
  {
    path: "/hr/pegawai",
    element: <Pegawai />,
  },
  {
    path: "/hr/pegawai/create",
    element: <CreateNewPegawai />,
  },
  {
    path: "/hr/pegawai/detail/:userId",
    element: <DetailUser />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
