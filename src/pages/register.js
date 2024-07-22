import AuthLayout from "../components/Layouts/AuthLayout";
import FormRegister from "../components/Fragments/FormRegister";

function RegisterPage() {
    return (
        <AuthLayout title={"Register"}>
            <FormRegister />
        </AuthLayout>
    )
}

export default RegisterPage;