import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import BlueButton from "../Elements/Buttons/BlueButton";
import ForgotPassword from "../Elements/ForgotPassword";
import SecondaryButton from "../Elements/Buttons/SecondaryButton";

function FormLogin() {
    return (
        <div className="flex flex-col">
            <form action="" className="flex flex-col px-[66px]">
                <Label label={"Email/username"} htmlFor="email"/>
                <Input type={"email"} name="email" placeholder={"Masukkan email"} />
                
                <Label label={"Password"} htmlFor="password"/>
                <Input type={"password"} name="password" placeholder={"Masukkan password"} />

                <ForgotPassword />
                <BlueButton name={"Login"}/>
            </form>
            <SecondaryButton name={"Sign Up"}/>
        </div>
    )
}

export default FormLogin;