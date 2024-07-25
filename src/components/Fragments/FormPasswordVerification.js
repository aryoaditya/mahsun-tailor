import BlueButton from "../Elements/Buttons/BlueButton";
import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import PageTitle from "../Elements/Title/PageTitle";

function FormPasswordVerification() {
  return (
    <div className="flex flex-col pb-12 pt-28 min-h-screen">
      <PageTitle title={"Verifikasi Akun"} />
      <form action="" className="flex flex-col px-[66px] mb-4">
        <div className="text-primary text-[15px] mb-11 flex flex-col items-center">
          <p className="font-normal">Masukkan kode OTP yang dikirim ke email</p>
          <p className="font-bold">ar****9@****com</p>
        </div>

        <Label label={"Kode OTP"} htmlFor="otp" />
        <Input type={"text"} name="otp" placeholder={"Masukkan kode OTP"} />
        <div className="w-full text-[10px] px-2 text-primary">
          <p>Perhatian: jangan beritahu kode OTP kepada siapapun.</p>
        </div>

        <div className="w-full flex justify-center">
          <div className="mt-8 text-[13px]">
            <BlueButton name={"Verifikasi"} route={"/change-password"} />
          </div>
        </div>
      </form>
      <div className="text-primary text-xs mt-11 flex flex-col items-center">
        <button className="font-bold">Kirim ulang OTP</button>
        <p className="mt-1">02:49</p>
      </div>
    </div>
  );
}

export default FormPasswordVerification;
