import BookingPageLayout from "./BookingPageLayout";
import BlueButton from "../Elements/Buttons/BlueButton";
import DetailContainerField from "../Elements/DetailContainer/DetailContainerField";

function BookingSelesaiLayout() {
  return (
    <BookingPageLayout title={"Pesanan Selesai"}>
      <div className="rounded-lg bg-background shadow-md w-full max-w-3xl">
        <div className="m-3 min-h-[100px] text-xs flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <p className="font-bold text-sm text-primary">Jas Pria</p>
            <BlueButton name={"Detail Order"} route={"/order"} />
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

export default BookingSelesaiLayout;
