import BookingMenu from "../Elements/BookingMenu/BookingMenu";
import PageTitle from "../Elements/Title/PageTitle";
import BlueButton from "../Elements/Buttons/BlueButton";
import BookingList from "../Fragments/BookingList";
import AntrianCard from "../Elements/AntrianCard";

function AntrianPageLayout() {
  return (
    <main className="flex flex-col flex-1 px-7 pb-12 pt-28 min-h-screen items-center bg-background">
      <BookingMenu />
      <PageTitle title={"Antrian Aktif"} />
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

      <BlueButton name={"Booking Sekarang"} />
    </main>
  );
}

export default AntrianPageLayout;
