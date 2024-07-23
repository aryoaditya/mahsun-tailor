import Footer from "../Fragments/Footers/Footer";
import NavBar from "../Fragments/NavBar";

function MainPageLayout({children}){
    return(
        <div className="flex flex-col">
            <NavBar />

            {children}
            
            <Footer />
        </div>
    );
}

export default MainPageLayout;