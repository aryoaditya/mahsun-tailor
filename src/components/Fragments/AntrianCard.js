function AntrianCard(props) {
  const { name, product, orderStatus, processStatus, estimasi } = props;
  const orderColorClass =
    orderStatus === "Order Diterima"
      ? "bg-green_status"
      : orderStatus === "Order Ditolak"
      ? "bg-red_status"
      : orderStatus === "Pengajuan"
      ? "bg-yellow_status"
      : "";

  const processColorClass =
    processStatus === "Proses Selesai"
      ? "bg-green_status text-white"
      : processStatus === "Proses Jahit"
      ? "bg-yellow_status text-white"
      : processStatus === "-"
      ? "bg-yellow_status bg-opacity-20 text-primary"
      : "";

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
            {orderStatus}
          </div>
          {/* Process Status */}
          <div
            className={`${processColorClass} bg-green_status w-full h-full font-semibold flex items-center justify-center rounded-md`}
          >
            {processStatus}
          </div>
        </div>
        {/* Estimation */}
        <p className="font-medium text-xs text-primary">{estimasi}</p>
      </div>
    </div>
  );
}

export default AntrianCard;
