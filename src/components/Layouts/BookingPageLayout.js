import BookingMenu from "../Elements/BookingMenu/BookingMenu";
import PageTitle from "../Elements/Title/PageTitle";

function BookingPageLayout({ children }) {
  return (
    <main className="flex flex-col flex-1 px-7 pb-12 pt-28 min-h-screen items-center bg-background">
      <BookingMenu />
      <PageTitle title={"Antrian Aktif"} />
      {children}
    </main>
  );
}

export default BookingPageLayout;
