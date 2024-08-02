import BlueButton from "../Elements/Buttons/BlueButton";
import BookingList from "../Fragments/BookingList";
import AntrianCard from "../Fragments/AntrianCard";
import BookingPageLayout from "./BookingPageLayout";
import { useEffect, useState } from "react";
import { getOrders } from "../../services/order.service";

function BookingAntrianPage() {
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = () => {
    setLoading(true);
    getOrders((status, res) => {
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
      </BookingList>
      <div className="text-[13px]">
        <BlueButton name={"Booking Sekarang"} route={"/booking"} />
      </div>
    </BookingPageLayout>
  );
}

export default BookingAntrianPage;
