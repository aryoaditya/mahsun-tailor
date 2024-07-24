import BlueButton from "../Elements/Buttons/BlueButton";
import BookingList from "../Fragments/BookingList";
import AntrianCard from "../Fragments/AntrianCard";
import BookingPageLayout from "./BookingPageLayout";

function BookingAntrianPage() {
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
          name={"Nabila Azzahwa"}
          product={"Dress"}
          orderStatus={"Order Ditolak"}
          processStatus={"-"}
          estimasi={"-"}
        />
        <AntrianCard
          name={"Nabila Azzahwa"}
          product={"Dress"}
          orderStatus={"Pengajuan"}
          processStatus={"-"}
          estimasi={"-"}
        />
        <AntrianCard
          name={"Nabila Azzahwa"}
          product={"Dress"}
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
