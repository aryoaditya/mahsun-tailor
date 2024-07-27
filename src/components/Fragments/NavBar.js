import { useState } from "react";
import { Link } from "react-router-dom";
import SecondaryButton from "../Elements/Buttons/SecondaryButton";
import BlueButton from "../Elements/Buttons/BlueButton";
import NavigationToggleMenu from "../Elements/NavigationMenu/NavigationToggleMenu";
import NavigationMenu from "../Elements/NavigationMenu/NavigationMenu";

function NavBar() {
  const [open, setOpen] = useState(false);
  function handleToggle(e) {
    setOpen(!open);
  }
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 shadow-sm ">
      <div className="py-3 px-4 flex justify-between items-center w-full bg-white md:px-7 lg:px-9">
        {/* Logo */}
        <img
          className="w-[111px]"
          src="/assets/img/logo-mahsun-tailor.png"
          alt=""
        />
        <div className="flex items-center">
          {/* Navigation Menu */}
          <div className="hidden lg:mr-10 lg:flex gap-10">
            <NavigationMenu route={"/"} text={"Beranda"} />
            <NavigationMenu route={"/products"} text={"Produk"} />
            <NavigationMenu route={"/booking/queue"} text={"Booking"} />
            <NavigationMenu route={"/login"} text={"Tentang"} />
          </div>
          {/* Login and Register */}
          <div className="hidden text-[13px] sm:flex gap-2 h-9 items-center justify-center">
            <Link
              to="/register"
              className="font-bold py-[7px] flex items-center justify-center text-primary hover:text-opacity-70"
            >
              <p className="inline-block text-center mx-auto w-full">
                Register
              </p>
            </Link>
            <Link
              to="/login"
              className="w-20 font-bold py-[7px] flex items-center rounded-full bg-gradient-to-b from-gradient1 from-0% via-gradient2 via-70% to-gradient3 to-100% text-white hover:shadow-lg hover:scale-[101%] transition-all duration-100"
            >
              <p className="inline-block px-5 text-center w-full">Login</p>
            </Link>
          </div>
          {/* Menu Toggle Mobile*/}
          <button onClick={handleToggle} className="ml-5 lg:hidden">
            <img
              className="w-[38px] h-[38px] hover:scale-105 transition-all duration-100"
              src="/assets/icons/menu.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      {/* Navigation Mobile */}
      <div
        className={`${
          open ? "block" : "hidden"
        } flex flex-col items-center border-t-[1px] shadow-md lg:hidden`}
      >
        <NavigationToggleMenu route={"/"} text={"Beranda"} />
        <NavigationToggleMenu route={"/products"} text={"Produk"} />
        <NavigationToggleMenu route={"/booking/queue"} text={"Booking"} />
        <NavigationToggleMenu route={"/login"} text={"Tentang"} />
        <div className="flex w-full bg-white py-3 justify-center gap-2 text-[13px] sm:hidden">
          <SecondaryButton name={"Sign Up"} route={"/register"} />
          <BlueButton name={"Login"} route={"/login"} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
