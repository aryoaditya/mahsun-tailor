import BookingPageLayout from "./BookingPageLayout";
import DetailContainerField from "../Elements/DetailContainer/DetailContainerField";

function BookingProsesLayout() {
  return (
    <BookingPageLayout title={"Proses Jahit Pesananmu"}>
      <div className="rounded-lg bg-background shadow-md w-full">
        <div className="m-3 min-h-[100px] text-xs flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <p className="font-bold text-sm text-primary">Jas Pria</p>
            <div className="text-white text-xs px-7 py-1 bg-green_status rounded-full flex">
              <p className="my-auto">5 hari lagi</p>
            </div>
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
      </div>
    </BookingPageLayout>
  );
}

export default BookingProsesLayout;
