import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import BlueButton from "../Elements/Buttons/BlueButton";

function FormRegister() {
    return (
        <div className="flex flex-col">
            <form action="" className="flex flex-col px-[66px]">
                <Label label={"Nama"} htmlFor="name"/>
                <Input type={"text"} name="name" placeholder={"cth: Thoha Mahsun"} />
                
                <Label label={"Email"} htmlFor="email"/>
                <Input type={"email"} name="email" placeholder={"example@mail.com"} />

                <Label label={"Username"} htmlFor="username"/>
                <Input type={"text"} name="username" placeholder={"cth: thohamahsun1967"} />  

                <Label label={"Password"} htmlFor="password"/>
                <Input type={"password"} name="password" placeholder={"**********"} />  

                <Label label={"Konfirmasi Password"} htmlFor="passwordConfirmation"/>
                <Input type={"password"} name="passwordConfirmation" placeholder={"**********"} />

                <div className="h-8"></div>

                <BlueButton name={"Sign Up"}/>
            </form>
        </div>
    )
}

export default FormRegister;