import BlueButton from "../Elements/Buttons/BlueButton";
import BookingPageLayout from "./BookingPageLayout";
import DetailContainerField from "../Elements/DetailContainer/DetailContainerField";
import { useState, useEffect } from "react";
import { getUserPendingPayments } from "../../services/order.service";
import { format } from "date-fns";
import { id } from "date-fns/locale";

function BookingTransaksiLayout() {
  const [userPendingPaymentList, setUserPendingPaymentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserPendingPayment = () => {
    setLoading(true);
    getUserPendingPayments((status, res) => {
      if (status) {
        setUserPendingPaymentList(res.data);
        setError(null);
      } else {
        setError(res);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchUserPendingPayment();
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
    <BookingPageLayout title={"Transaksi Aktif"}>
      <div className="flex flex-col items-center gap-5 w-full max-w-3xl">
        {userPendingPaymentList.length > 0 ? (
          userPendingPaymentList.map((userPendingPayment, index) => (
            <div
              key={index}
              className="rounded-lg bg-background shadow-md w-full max-w-3xl"
            >
              <div className="m-3 min-h-[100px] text-xs flex flex-col gap-3">
                <DetailContainerField
                  row={"Model pesanan"}
                  value={userPendingPayment.model.map((x) => x).join(", ")}
                />
                <DetailContainerField
                  row={"Estimasi selesai"}
                  value={formatDate(userPendingPayment.estimatedDate)}
                />
                <DetailContainerField
                  row={"Pengukuran"}
                  value={userPendingPayment.measurementLocation}
                />
                <DetailContainerField
                  row={"Deskripsi Pesanan"}
                  value={
                    !userPendingPayment.remarks
                      ? "-"
                      : userPendingPayment.remarks
                  }
                />
                <DetailContainerField
                  row={"Total Tagihan"}
                  value={`Rp. ${userPendingPayment.transaction.totalPrice}`}
                />
                <div className="flex justify-end">
                  <BlueButton name={"Pilih Pembayaran"} route={"/payment"} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            <p>Hai, tidak ada tagihan transaksi untuk kamu :D</p>
          </>
        )}
      </div>
    </BookingPageLayout>
  );
}

export default BookingTransaksiLayout;
