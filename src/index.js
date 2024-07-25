import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import BookingAntrianPage from "./pages/bookingAntrian";
import BookingTransaksiPage from "./pages/bookingTransaksi";
import BookingProsesPage from "./pages/bookingProses";
import BookingSelesaiPage from "./pages/bookingSelesai";
import BookingPage from "./pages/booking";
import ForgotPasswordPage from "./pages/forgotPassword";
import ChangePasswordPage from "./pages/changePassword";
import PasswordVerificationPage from "./pages/passwordVerification";
import PembayaranPage from "./pages/pembayaran";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/booking",
    element: <BookingPage />,
  },
  {
    path: "/booking/queue",
    element: <BookingAntrianPage />,
  },
  {
    path: "/booking/transaction",
    element: <BookingTransaksiPage />,
  },
  {
    path: "/booking/process",
    element: <BookingProsesPage />,
  },
  {
    path: "/booking/finished",
    element: <BookingSelesaiPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/forgot-password/verification",
    element: <PasswordVerificationPage />,
  },
  {
    path: "/change-password",
    element: <ChangePasswordPage />,
  },
  {
    path: "/payment",
    element: <PembayaranPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
