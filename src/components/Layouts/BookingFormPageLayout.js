import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import BlueButton from "../Elements/Buttons/BlueButton";
import PageTitle from "../Elements/Title/PageTitle";
import SecondaryButton from "../Elements/Buttons/SecondaryButton";

function BookingFormPageLayout() {
  return (
    <main className="flex flex-col flex-1 px-7 pb-12 pt-28 min-h-screen items-center bg-background">
      <PageTitle title={"Booking"} />
      <div className="w-full">
        <form action="" className="flex flex-col mb-[11px] ">
          <Label label={"Nama"} htmlFor="nama" />
          <Input type={"text"} name="nama" placeholder={"cth: Thoha Mahsun"} />

          <Label label={"Nomor Handphone"} htmlFor="phone" />
          <Input type={"text"} name="phone" placeholder={"08123123123"} />

          <Label label={"Jasa apa yang Anda butuhkan?"} htmlFor="service" />
          <Input type={"text"} name="service" placeholder={"Opsi"} />

          <Label label={"Alamat Anda"} htmlFor="address" />
          <Input
            type={"text"}
            name="address"
            placeholder={"Jalan Pahlawan No.51"}
          />

          <Label
            label={"Apakah Anda perlu pengukuran?"}
            htmlFor="measurement"
          />
          <Input type={"text"} name="measurement" placeholder={"Opsi"} />

          <Label
            label={"Apakah penjahit perlu datang ke rumah Anda?"}
            htmlFor="coming"
          />
          <Input type={"text"} name="coming" placeholder={"Opsi"} />

          <Label
            label={"Estimasi tanggal selesai yang Anda harapkan?"}
            htmlFor="estimation"
          />
          <Input type={"text"} name="estimation" placeholder={"18/12/2024"} />

          <Label label={"Ada referensi model?"} htmlFor="modelRef" />
          <Input type={"text"} name="modelRef" placeholder={"upload file"} />

          <Label
            label={"Ada yang ingin kamu deskripsikan?"}
            htmlFor="description"
          />
          <textarea
            name="description"
            rows="4"
            id=""
            placeholder="Deskripsikan lebih detail"
            className="w-full align-top rounded-md py-3 px-3 mb-3 border border-primary border-opacity-20 text-sm text-primary focus:outline-sky-800 focus:outline-1"
          />

          <div className="h-8"></div>

          <div className="flex justify-end gap-2">
            <SecondaryButton name={"Kembali"} route={"/"} />
            <BlueButton name={"Booking"} />
          </div>
        </form>
      </div>
    </main>
  );
}

export default BookingFormPageLayout;
