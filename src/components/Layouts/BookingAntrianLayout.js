import BlueButton from "../Elements/Buttons/BlueButton";
import BookingList from "../Fragments/BookingList";
import AntrianCard from "../Fragments/AntrianCard";
import BookingPageLayout from "./BookingPageLayout";
import { useEffect } from "react";
import { getPayload } from "../../services/auth.service";

const token = localStorage.getItem("token");

function BookingAntrianPage() {
  useEffect(() => {
    getPayload(token);
  }, []);
  return (
    <BookingPageLayout title={"Antrian Aktif"}>
      <BookingList>
        <AntrianCard
          name={"Aryo Aditya"}
          product={"Jas Pria"}
          orderStatus={"Order Diterima"}
          processStatus={"Proses Selesai"}
          estimasi={"Selesai: 18/9/2024"}
        />
        <AntrianCard
          name={"Kayla Rhaniera Sarasvati"}
          product={"Kebaya"}
          orderStatus={"Order Diterima"}
          processStatus={"Proses Jahit"}
          estimasi={"Estimasi: 18/9/2024"}
        />
        <AntrianCard
          name={"Aryo Aditya"}
          product={"Custom"}
          orderStatus={"Order Ditolak"}
          processStatus={"-"}
          estimasi={"-"}
        />
        <AntrianCard
          name={"Aryo Aditya"}
          product={"Custom"}
          orderStatus={"Pengajuan"}
          processStatus={"-"}
          estimasi={"-"}
        />
        <AntrianCard
          name={"Aryo Aditya"}
          product={"Custom"}
          orderStatus={"Pengajuan"}
          processStatus={"-"}
          estimasi={"-"}
        />
      </BookingList>
      <div className="text-[13px]">
        <BlueButton name={"Booking Sekarang"} route={"/booking"} />
      </div>
    </BookingPageLayout>
  );
}

export default BookingAntrianPage;
