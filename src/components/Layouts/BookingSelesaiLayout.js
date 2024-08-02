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
                row={"Estimasi selesai"}
                value={formatDate(userCompletedOrder.estimatedDate)}
              />
              <DetailContainerField
                row={"Pengukuran"}
                value={userCompletedOrder.measurementLocation}
              />
              <DetailContainerField
                row={"Deskripsi Pesanan"}
                value={
                  !userCompletedOrder.remarks ? "-" : userCompletedOrder.remarks
                }
              />
              <DetailContainerField
                row={"Total Tagihan"}
                value={`Rp. ${userCompletedOrder.orderDetail.totalBill}`}
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
      {/* <div className="rounded-lg bg-background shadow-md w-full max-w-3xl">
        <div className="m-3 min-h-[100px] text-xs flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <p className="font-bold text-sm text-primary">Jas Pria</p>
            <BlueButton name={"Detail Order"} route={"/order"} />
          </div>
          <DetailContainerField
            row={"Estimasi selesai"}
            value={"29 September 2024"}
          />
          <DetailContainerField
            row={"Pengukuran"}
            value={"Datang ke penjahit, Jumat 19 Juni 2024"}
          />
          <DetailContainerField
            row={"Deskripsi Pesanan"}
            value={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione sed nihil impedit iusto exercitationem odio similique. Dolore, nemo earum."
            }
          />
          <DetailContainerField row={"Total Harga"} value={"Rp. 4.000.000"} />
        </div>
      </div> */}
    </BookingPageLayout>
  );
}

export default BookingSelesaiLayout;
