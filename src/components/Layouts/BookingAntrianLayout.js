import BlueButton from "../Elements/Buttons/BlueButton";
import BookingList from "../Fragments/BookingList";
import AntrianCard from "../Fragments/AntrianCard";
import BookingPageLayout from "./BookingPageLayout";
import { useEffect, useState } from "react";
import { getOrder } from "../../services/order.service";

function BookingAntrianPage() {
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = () => {
    setLoading(true);
    getOrder((status, res) => {
      if (status) {
        setOrderList(res.data);
        setError(null);
      } else {
        setError(res);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <BookingPageLayout title={"Antrian Aktif"}>
      <BookingList>
        {orderList.length > 0 ? (
          orderList.map((order, index) => (
            <AntrianCard
              key={index}
              name={order.userId.name}
              products={order.model}
              orderStatus={order.status}
              orderDetail={order.orderDetail}
              estimasi={order.estimatedDate}
            />
          ))
        ) : (
          <>
            <p>Tidak ada antrian aktif.</p>
            <p>Silakan booking tanpa antrian.</p>
          </>
        )}
        {/* <AntrianCard
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
        /> */}
      </BookingList>
      <div className="text-[13px]">
        <BlueButton name={"Booking Sekarang"} route={"/booking"} />
      </div>
    </BookingPageLayout>
  );
}

export default BookingAntrianPage;
