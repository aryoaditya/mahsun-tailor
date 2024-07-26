import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import BlueButton from "../Elements/Buttons/BlueButton";
import ForgotPassword from "../Elements/ForgotPassword";

function FormLogin() {
  return (
    <div className="flex flex-col items-center">
      <form action="" className="flex flex-col px-[66px] mb-4 w-full max-w-xl">
        <Label label={"Email/username"} htmlFor="email" />
        <Input type={"email"} name="email" placeholder={"example@mail.com"} />

        <Label label={"Password"} htmlFor="password" />
        <Input type={"password"} name="password" placeholder={"**********"} />

        <ForgotPassword />
        <div className="w-full flex justify-center">
          <div className="mt-8 text-[13px] w-[100px]">
            <BlueButton name={"Login"} />
          </div>
        </div>
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
