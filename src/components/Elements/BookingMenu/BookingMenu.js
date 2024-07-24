import BookingIcon from "./BookingIcon";

function BookingMenu() {
  return (
    <div className="flex w-full items-center justify-center gap-4 mb-12">
      <BookingIcon
        iconName="queue-icon"
        title="Antrian"
        route={"/booking/queue"}
      />
      <BookingIcon
        iconName="transaction-icon"
        title="Transaksi"
        route={"/booking/transaction"}
      />
      <BookingIcon
        iconName="process-icon"
        title="Proses"
        route={"/booking/process"}
      />
      <BookingIcon
        iconName="clipboard-icon"
        title="Selesai"
        route={"/booking/finished"}
      />
    </div>
  );
}

export default BookingMenu;
