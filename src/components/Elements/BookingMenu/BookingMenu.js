import { useLocation } from "react-router-dom";
import BookingIcon from "./BookingIcon";

function BookingMenu() {
  const currentLocation = useLocation();
  return (
    <div className="flex w-full items-center justify-center gap-4 mb-12">
      <BookingIcon
        iconName="queue-icon"
        title="Antrian"
        route={"/booking/queue"}
        menuClass={
          currentLocation.pathname === "/booking/queue"
            ? "bg-primary bg-opacity-10"
            : "hover:bg-primary hover:bg-opacity-10"
        }
      />
      <BookingIcon
        iconName="transaction-icon"
        title="Transaksi"
        route={"/booking/transaction"}
        menuClass={
          currentLocation.pathname === "/booking/transaction"
            ? "bg-primary bg-opacity-10"
            : "hover:bg-primary hover:bg-opacity-10"
        }
      />
      <BookingIcon
        iconName="process-icon"
        title="Proses"
        route={"/booking/process"}
        menuClass={
          currentLocation.pathname === "/booking/process"
            ? "bg-primary bg-opacity-10"
            : "hover:bg-primary hover:bg-opacity-10"
        }
      />
      <BookingIcon
        iconName="clipboard-icon"
        title="Selesai"
        route={"/booking/finished"}
        menuClass={
          currentLocation.pathname === "/booking/finished"
            ? "bg-primary bg-opacity-10"
            : "hover:bg-primary hover:bg-opacity-10"
        }
      />
    </div>
  );
}

export default BookingMenu;
