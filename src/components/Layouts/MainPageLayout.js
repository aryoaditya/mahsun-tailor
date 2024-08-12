import Footer from "../Fragments/Footers/Footer";
import NavBar from "../Fragments/NavBar";

function MainPageLayout({ children }) {
  return (
    <div className="flex flex-col items-center">
      <NavBar />

      {children}

      <Footer />
    </div>
  );
}

export default MainPageLayout;
