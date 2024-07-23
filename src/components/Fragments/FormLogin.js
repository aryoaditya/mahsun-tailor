import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import BlueButton from "../Elements/Buttons/BlueButton";
import ForgotPassword from "../Elements/ForgotPassword";

function FormLogin() {
  return (
    <div className="flex flex-col">
      <form action="" className="flex flex-col px-[66px] mb-[11px]">
        <Label label={"Email/username"} htmlFor="email" />
        <Input type={"email"} name="email" placeholder={"example@mail.com"} />

        <Label label={"Password"} htmlFor="password" />
        <Input type={"password"} name="password" placeholder={"**********"} />

        <ForgotPassword />

        <div className="h-8"></div>

        <BlueButton name={"Login"} />
      </form>
      <div className="flex justify-center text-[13px]">
        <p>Belum punya akun? </p>
        <a
          href="/register"
          className="text-blue-700 hover:text-blue-800 font-medium pl-1"
        >
          Daftar disini
        </a>
      </div>
    </div>
  );
}

export default FormLogin;
