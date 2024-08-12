import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import { register } from "../../services/auth.service";
import SubmitButton from "../Elements/Buttons/SubmitButton";
import { useState } from "react";

function FormRegister() {
  const [registerFailed, setRegisterFailed] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      username: e.target.username.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
      password_confirmation: e.target.passwordConfirmation.value,
    };

    if (data.password !== data.password_confirmation) {
      setRegisterFailed("Konfirmasi password tidak sesuai");
      return;
    }

    register(data, (status, res) => {
      if (status) {
        window.location.href = "/login";
      } else {
        setRegisterFailed(res);
      }
    });
  };

  return (
    <div className="flex flex-col items-center">
      <form
        className="flex flex-col px-[66px] mb-4 w-full max-w-xl"
        onSubmit={handleRegister}
      >
        {registerFailed && (
          <p className="text-red-500 text-center font-semibold">
            {registerFailed}
          </p>
        )}
        <Label label={"Nama"} htmlFor="name" />
        <Input type={"text"} name="name" placeholder={"Thoha Mahsun"} />

        <Label label={"Email"} htmlFor="email" />
        <Input type={"email"} name="email" placeholder={"example@mail.com"} />

        <Label label={"Username"} htmlFor="username" />
        <Input type={"text"} name="username" placeholder={"thohamahsun1967"} />

        <Label label={"Nomor Handphone"} htmlFor="phone" />
        <Input type={"text"} name="phone" placeholder={"08123123123"} />

        <Label label={"Password"} htmlFor="password" />
        <Input type={"password"} name="password" placeholder={"**********"} />

        <Label label={"Konfirmasi Password"} htmlFor="passwordConfirmation" />
        <Input
          type={"password"}
          name="passwordConfirmation"
          placeholder={"**********"}
        />

        <div className="w-full flex justify-center">
          <div className="mt-8 text-[13px] w-[100px]">
            <SubmitButton name={"Sign Up"} />
          </div>
        </div>
      </form>
      <div className="flex justify-center text-[13px]">
        <p>Sudah punya akun? </p>
        <a
          href="/login"
          className="text-blue-700 hover:text-blue-800 font-medium pl-1"
        >
          Login disini
        </a>
      </div>
    </div>
  );
}

export default FormRegister;
