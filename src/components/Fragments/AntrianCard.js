import { format } from "date-fns";
import { id } from "date-fns/locale";

function AntrianCard(props) {
  const { name, product, orderStatus, orderDetail, estimasi } = props;
  let processStatus = "";
  let processStatusClass = "";

  const formatDate = (dateString) => {
    return format(new Date(dateString), "dd MMMM yyyy", { locale: id });
  };

  const formatedEstimation = formatDate(estimasi);

  const orderColorClass =
    orderStatus === "Accepted"
      ? "bg-green_status"
      : orderStatus === "Pending"
      ? "bg-yellow_status"
      : "bg-red_status";

  const status =
    orderStatus === "Pending"
      ? "Menunggu"
      : orderStatus === "Accepted"
      ? "Order Diterima"
      : orderStatus === "Rejected"
      ? "Order Ditolak"
      : "Dibatalkan";

  if (!orderDetail) {
    processStatus = "-";
    processStatusClass = "bg-yellow_status bg-opacity-20 text-primary";
  } else {
    console.log(orderDetail.processStatus);
    if (orderDetail.processStatus === 0) {
      processStatus = "Menunggu Pembayaran";
      processStatusClass = "bg-yellow_status text-white";
    }
    if (orderDetail.processStatus === 1) {
      processStatus = "Proses Jahit";
      processStatusClass = "bg-yellow_status text-white";
    }
    if (orderDetail.processStatus === 2) {
      processStatus = "Proses Pengiriman";
      processStatusClass = "bg-yellow_status text-white";
    }
    if (orderDetail.processStatus === 3) {
      processStatus = "Proses Selesai";
      processStatusClass = "bg-green_status text-white";
    }
  }

  return (
    <div className="rounded-lg bg-background shadow-md min-h-[52px] text-xs flex flex-row items-center sm:h-14 sm:text-sm md:h-16 md:text-base ">
      {/* Customer Name */}
      <div className="flex flex-wrap h-full items-center justify-center w-20 sm:w-36 md:w-40 lg:w-48">
        <div className="text-center">{name}</div>
      </div>

      {/* Order Status */}
      <div className="flex flex-col gap-1 px-1 items-center justify-evenly h-full w-full border-l border-dashed border-l-stone-300">
        {/* Order, Product, Process Status */}
        <div className="text-[11px] flex gap-1 w-full justify-evenly h-5 sm:text-xs sm:gap-4 md:text-sm md:h-6 md:gap-6">
          {/* Order Product Type */}
          <div className="bg-green_primary w-full text-white font-semibold flex items-center justify-center rounded-md">
            {product}
          </div>

          {/* Order Status */}
          <div
            className={`${orderColorClass} w-full h-full text-white font-semibold flex items-center justify-center rounded-md`}
          >
            {status}
          </div>
          {/* Process Status */}
          <div
            className={`${processStatusClass} bg-green_status w-full h-full font-semibold flex items-center justify-center rounded-md`}
          >
            {processStatus}
          </div>
        </div>
        {/* Estimation */}
        <p className="font-medium text-xs text-primary">
          {processStatus === "Proses Selesai"
            ? `Selesai: ${formatedEstimation}`
            : `Estimasi selesai: ${formatedEstimation}`}
        </p>
      </div>
    </div>
  );
}

export default AntrianCard;
