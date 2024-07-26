import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import BlueButton from "../Elements/Buttons/BlueButton";

function FormRegister() {
  return (
    <div className="flex flex-col items-center">
      <form action="" className="flex flex-col px-[66px] mb-4 w-full max-w-xl">
        <Label label={"Nama"} htmlFor="name" />
        <Input type={"text"} name="name" placeholder={"cth: Thoha Mahsun"} />

        <Label label={"Email"} htmlFor="email" />
        <Input type={"email"} name="email" placeholder={"example@mail.com"} />

        <Label label={"Username"} htmlFor="username" />
        <Input
          type={"text"}
          name="username"
          placeholder={"cth: thohamahsun1967"}
        />

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
            <BlueButton name={"Sign Up"} />
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
