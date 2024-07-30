import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import ForgotPassword from "../Elements/ForgotPassword";
import { login } from "../../services/auth.service";
import SubmitButton from "../Elements/Buttons/SubmitButton";
import { useState } from "react";

function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      emailOrUsername: e.target.emailOrUsername.value,
      password: e.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/booking/queue";
      } else {
        setLoginFailed(res);
      }
    });
  };
  return (
    <div className="flex flex-col items-center">
      <form
        className="flex flex-col px-[66px] mb-4 w-full max-w-xl"
        onSubmit={handleLogin}
      >
        {loginFailed && (
          <p className="text-red-500 text-center font-semibold">
            {loginFailed}
          </p>
        )}
        <Label label={"Email/username"} htmlFor="emailOrUsername" />
        <Input
          type={"text"}
          name="emailOrUsername"
          placeholder={"Email atau username"}
        />

        <Label label={"Password"} htmlFor="password" />
        <Input type={"password"} name="password" placeholder={"**********"} />

        <ForgotPassword />
        <div className="w-full flex justify-center">
          <div className="mt-8 text-[13px] w-[100px]">
            <SubmitButton name={"Login"} />
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
