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
import BookingFormPage from "./pages/bookingForm";
import ForgotPasswordPage from "./pages/forgotPassword";
import ChangePasswordPage from "./pages/changePassword";
import PasswordVerificationPage from "./pages/passwordVerification";
import PembayaranPage from "./pages/pembayaran";
import DetailOrderPage from "./pages/detailOrder";
import PrivateRoute from "./components/PrivateRoute";

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
    element: (
      <PrivateRoute>
        <BookingFormPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/booking/queue",
    element: (
      <PrivateRoute>
        <BookingAntrianPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/booking/transaction",
    element: (
      <PrivateRoute>
        <BookingTransaksiPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/booking/process",
    element: (
      <PrivateRoute>
        <BookingProsesPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/booking/finished",
    element: (
      <PrivateRoute>
        <BookingSelesaiPage />
      </PrivateRoute>
    ),
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
    element: (
      <PrivateRoute>
        <PembayaranPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/order",
    element: (
      <PrivateRoute>
        <DetailOrderPage />
      </PrivateRoute>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
