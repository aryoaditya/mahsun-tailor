import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import BlueButton from "../Elements/Buttons/BlueButton";
import PageTitle from "../Elements/Title/PageTitle";

function FormChangePassword() {
  return (
    <div className="flex flex-col pb-12 pt-28 min-h-screen">
      <PageTitle title={"Lupa Password"} />
      <form action="" className="flex flex-col px-[66px] mb-4">
        <Label label={"Password Baru"} htmlFor="password" />
        <Input type={"password"} name="password" placeholder={"**********"} />

        <Label label={"Konfirmasi Password Baru"} htmlFor="newPassword" />
        <Input
          type={"password"}
          name="newPassword"
          placeholder={"**********"}
        />

        <div className="w-full flex justify-center">
          <div className="mt-8 text-[13px] w-[100px]">
            <BlueButton name={"Ubah"} route={"/login"} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormChangePassword;
