import GoogleLoginButton from "../Elements/Buttons/GoogleLoginButton";
import PageTitle from "../Elements/Title/PageTitle";
import SimpleFooter from "../Fragments/Footers/SimpleFooter";
import NavBar from "../Fragments/NavBar";

function AuthLayout({ title, children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />

            <main className="flex flex-col flex-1 pb-10">
                {/* Title */}
                <PageTitle>
                    { title }
                </PageTitle>

                {/* Form */}
                { children }

                {/* Google Login Button */}
                <GoogleLoginButton />
            </main>

            {/* Footer */}
            <SimpleFooter />
        </div>
    );
};

export default AuthLayout;