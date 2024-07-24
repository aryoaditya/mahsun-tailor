import BookingIcon from "./BookingIcon";

function BookingMenu() {
  return (
    <div className="flex w-full items-center justify-center gap-4 mb-12">
      <BookingIcon iconName="queue-icon" title="Antrian" />
      <BookingIcon iconName="transaction-icon" title="Transaksi" />
      <BookingIcon iconName="process-icon" title="Proses" />
      <BookingIcon iconName="clipboard-icon" title="Selesai" />
    </div>
  );
}

export default BookingMenu;
