import BlueButton from "../Elements/Buttons/BlueButton";
import DetailContainer from "../Elements/DetailContainer/DetailContainer";
import DetailContainerField from "../Elements/DetailContainer/DetailContainerField";
import MethodOption from "../Elements/MethodOption";
import PageTitle from "../Elements/Title/PageTitle";

function PembayaranPageLayout() {
  return (
    <main className="flex flex-col flex-1 px-7 pt-28 pb-12 min-h-screen items-center max-w-3xl">
      <PageTitle title={"Transaksi Pembayaran"} />
      {/* Method Option */}
      <MethodOption subtitle={"Metode Pembayaran"} img={"bri"} name={"BRI"} />
      <MethodOption
        subtitle={"Metode Pengiriman"}
        img={"gosend"}
        name={"Go-send Instant"}
      />
      <DetailContainer subtitle={"Detail Pesanan"}>
        <div className="flex flex-col w-full p-3 gap-3">
          <DetailContainerField
            row={"Tanggal selesai"}
            value={"29 September 2024"}
          />
          <DetailContainerField row={"Jenis Pesanan"} value={"Jas Pria"} />
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
      </DetailContainer>

      <BlueButton name={"Bayar Sekarang"} />
    </main>
  );
}

export default PembayaranPageLayout;
