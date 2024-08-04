import BookingPageLayout from "./BookingPageLayout";
import BlueButton from "../Elements/Buttons/BlueButton";
import DetailContainerField from "../Elements/DetailContainer/DetailContainerField";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { getUserCompletedOrders } from "../../services/order.service";

function BookingSelesaiLayout() {
  const [userCompletedOrderList, setUserCompletedOrderList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserCompletedOrders = () => {
    setLoading(true);

    getUserCompletedOrders((status, res) => {
      if (status) {
        setUserCompletedOrderList(res.data);
        setError(null);
      } else {
        setError(res);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchUserCompletedOrders();
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
    <BookingPageLayout title={"Pesanan Selesai"}>
      <div className="flex flex-col items-center gap-5 w-full max-w-3xl">
        {userCompletedOrderList.length > 0 ? (
          userCompletedOrderList.map((userCompletedOrder, index) => (
            <div
              key={index}
              className="rounded-lg bg-background shadow-md w-full max-w-3xl"
            >
              <div className="m-3 min-h-[100px] text-xs flex flex-col gap-3">
                <DetailContainerField
                  row={"Model pesanan"}
                  value={userCompletedOrder.model.map((x) => x).join(", ")}
                />
                <DetailContainerField
                  row={"Pesanan selesai"}
                  value={formatDate(userCompletedOrder.estimatedDate)}
                />
                <DetailContainerField
                  row={"Pengukuran"}
                  value={userCompletedOrder.measurementLocation}
                />
                <DetailContainerField
                  row={"Deskripsi Pesanan"}
                  value={
                    !userCompletedOrder.remarks
                      ? "-"
                      : userCompletedOrder.remarks
                  }
                />
                <DetailContainerField
                  row={"Total Tagihan"}
                  value={`Rp. ${userCompletedOrder.transaction.totalPrice}`}
                />
                <div className="flex justify-end">
                  <BlueButton name={"Detail Order"} route={"/order"} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            <p>Hai, kamu belum ada riwayat pesanan</p>
            <p>Yuk buat pesanan pertamamu! :D</p>
          </>
        )}
      </div>
    </BookingPageLayout>
  );
}

export default BookingSelesaiLayout;
