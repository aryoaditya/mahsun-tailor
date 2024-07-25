import BlueButton from "../Elements/Buttons/BlueButton";
import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import PageTitle from "../Elements/Title/PageTitle";

function FormForgotPassword() {
  return (
    <div className="flex flex-col pb-12 pt-28 min-h-screen">
      <PageTitle title={"Lupa Password"} />
      <form action="" className="flex flex-col px-[66px] mb-4">
        <Label label={"Email/username"} htmlFor="email" />
        <Input type={"email"} name="email" placeholder={"example@mail.com"} />
        <div className="w-full text-[10px] px-2 text-primary">
          <p>
            Masukkan email atau username yang telah terhubung ke ke akun mahsun
            tailor.{" "}
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="mt-8 text-[13px]">
            <BlueButton
              name={"Selanjutnya"}
              route={"/forgot-password/verification"}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormForgotPassword;
