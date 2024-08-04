import { format } from "date-fns";
import { id } from "date-fns/locale";

function AntrianCard(props) {
  const { name, products, orderStatus, processStatus, estimasi } = props;
  let processStatusValue = "";
  let processStatusClass = "";
  let product = products[0];

  if (products.length === 2) {
    product = product + " dan " + products[1];
  } else if (products.length > 2) {
    product = product + " dan " + (products.length - 1) + " lainnya";
  }

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

  if (!processStatus) {
    processStatusValue = "-";
    processStatusClass = "bg-yellow_status bg-opacity-20 text-primary";
  } else {
    if (processStatus === "Waiting for Payment") {
      processStatusValue = "Menunggu Pembayaran";
      processStatusClass = "bg-yellow_status text-white";
    }
    if (processStatus === "In Process") {
      processStatusValue = "Proses Jahit";
      processStatusClass = "bg-yellow_status text-white";
    }
    if (processStatus === "In Delivery") {
      processStatusValue = "Proses Pengiriman";
      processStatusClass = "bg-yellow_status text-white";
    }
    if (processStatus === "Completed") {
      processStatusValue = "Proses Selesai";
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
      <div className="flex flex-col gap-1 px-1 py-2 items-center justify-evenly h-full w-full border-l border-dashed border-l-stone-300">
        {/* Order, Product, Process Status */}
        <div className="text-[10px] flex gap-1 w-full justify-evenly min-h-5 sm:text-xs sm:gap-4 md:text-sm md:h-6 md:gap-6">
          {/* Order Product Type */}
          <div className="bg-green_primary py-1 sm:py-3 w-full text-white font-semibold flex items-center justify-center rounded-full">
            <p className="text-center">{product}</p>
          </div>

          {/* Order Status */}
          <div
            className={`${orderColorClass} py-1 sm:py-3 w-full text-white font-semibold flex items-center justify-center rounded-full`}
          >
            <p className="text-center">{status}</p>
          </div>
          {/* Process Status */}
          <div
            className={`${processStatusClass} bg-green_status py-1 sm:py-3 w-full font-semibold flex items-center justify-center rounded-full`}
          >
            <p className="text-center">{processStatusValue}</p>
          </div>
        </div>
        {/* Estimation */}
        <p className="font-medium text-[10px] mt-2 text-primary sm:text-xs">
          {processStatusValue === "Proses Selesai"
            ? `Selesai: ${formatedEstimation}`
            : `Estimasi selesai: ${formatedEstimation}`}
        </p>
      </div>
    </div>
  );
}

export default AntrianCard;
