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
    <div className="rounded-lg bg-white shadow-md w-full">
      <div className="mx-2 bg-white p-0 min-h-[52px] text-xs flex flex-row items-center">
        <div>
          <div className="flex flex-wrap mr-1 w-16 h-full items-center justify-center">
            <div className="text-center">{name}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-evenly h-full w-full border-l border-dashed border-l-stone-300">
          <div className="ml-1 text-[11px] flex gap-1 w-full justify-evenly">
            <div className="bg-green_primary h-5 min-w-16 text-white font-semibold flex items-center justify-center rounded-md">
              {product}
            </div>
            <div
              className={`${orderColorClass} h-5 min-w-[105px] text-white font-semibold flex items-center justify-center rounded-md`}
            >
              {orderStatus}
            </div>
            <div
              className={`${processColorClass} bg-green_status h-5 min-w-24 font-semibold flex items-center justify-center rounded-md`}
            >
              {processStatus}
            </div>
          </div>
          <p className="font-medium text-xs text-primary">{estimasi}</p>
        </div>
      </div>
    </div>
  );
}

export default AntrianCard;
