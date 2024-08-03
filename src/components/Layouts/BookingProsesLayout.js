import BookingPageLayout from "./BookingPageLayout";
import DetailContainerField from "../Elements/DetailContainer/DetailContainerField";
import { useState, useEffect } from "react";
import { getUserProcessOrders } from "../../services/order.service";
import { format } from "date-fns";
import { id } from "date-fns/locale";

function BookingProsesLayout() {
  const [userProcessOrderList, setUserProcessOrderList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserProcessOrders = () => {
    setLoading(true);

    getUserProcessOrders((status, res) => {
      if (status) {
        setUserProcessOrderList(res.data);
        setError(null);
      } else {
        setError(res);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchUserProcessOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const formatDate = (dateString) => {
    return format(new Date(dateString), "dd MMMM yyyy", { locale: id });
  };

  return (
    <BookingPageLayout title={"Proses Jahit"}>
      {userProcessOrderList.length > 0 ? (
        userProcessOrderList.map((userProcessOrder, index) => (
          <div
            key={index}
            className="rounded-lg bg-background shadow-md w-full max-w-3xl"
          >
            <div className="m-3 min-h-[100px] text-xs flex flex-col gap-3">
              <DetailContainerField
                row={"Model pesanan"}
                value={userProcessOrder.model.map((x) => x).join(", ")}
              />
              <DetailContainerField
                row={"Estimasi selesai"}
                value={formatDate(userProcessOrder.estimatedDate)}
              />
              <DetailContainerField
                row={"Pengukuran"}
                value={userProcessOrder.measurementLocation}
              />
              <DetailContainerField
                row={"Deskripsi Pesanan"}
                value={
                  !userProcessOrder.remarks ? "-" : userProcessOrder.remarks
                }
              />
              <DetailContainerField
                row={"Total Tagihan"}
                value={`Rp. ${userProcessOrder.orderDetail.totalBill}`}
              />
              <div className="flex justify-end">
                <div className="text-white text-xs px-7 py-1 bg-green_status rounded-full flex">
                  {userProcessOrder.orderDetail.processStatus ===
                  "In Delivery" ? (
                    <p className="my-auto">Proses Pengantaran</p>
                  ) : (
                    <p className="my-auto">5 hari lagi</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <p>Tidak ada pesananmu yang sedang diproses</p>
          <p>Yuk buat order baru! :D</p>
        </>
      )}
    </BookingPageLayout>
  );
}

export default BookingProsesLayout;
