import PageTitle from "../Elements/Title/PageTitle";
import DetailContainer from "../Elements/DetailContainer/DetailContainer";
import DetailContainerField from "../Elements/DetailContainer/DetailContainerField";
import BlueButton from "../Elements/Buttons/BlueButton";

function DetailOrderLayout() {
  return (
    <main className="flex flex-col flex-1 px-7 pt-28 pb-12 min-h-screen items-center">
      <PageTitle title={"Detail Order"} />
      <DetailContainer subtitle={"Transaksi Berhasil"}>
        <div className="flex flex-col w-full p-3 gap-3">
          <DetailContainerField
            row={"Tanggal Transaksi"}
            value={"29 September 2024 23:00 WIB"}
          />
          <DetailContainerField row={"Jenis Pesanan"} value={"Jas Pria"} />
        </div>
      </DetailContainer>

      <DetailContainer subtitle={"Detail Pesanan"}>
        <div className="flex flex-col w-full p-3 gap-3">
          <DetailContainerField
            row={"Tanggal Selesai"}
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

      <DetailContainer subtitle={"Rincian Pembayaran dan Pengiriman"}>
        <div className="flex flex-col w-full p-3 gap-3">
          <DetailContainerField
            row={"Metode Pembayaran"}
            value={"BRI Transfer"}
          />
          <DetailContainerField
            row={"Metode Pengiriman"}
            value={"Go-send Instant"}
          />
        </div>
      </DetailContainer>

      <BlueButton name={"Order Lagi"} />
    </main>
  );
}

export default DetailOrderLayout;
