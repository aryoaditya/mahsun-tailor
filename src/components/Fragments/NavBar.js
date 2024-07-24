import { useState } from "react";
import { Link } from "react-router-dom";
import SecondaryButton from "../Elements/Buttons/SecondaryButton";
import BlueButton from "../Elements/Buttons/BlueButton";

function NavBar() {
  const [open, setOpen] = useState(false);
  function handleToggle(e) {
    setOpen(!open);
  }
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 shadow-sm">
      <div className="p-3 flex justify-between items-center bg-white">
        <img
          className="w-[111px]"
          src="/assets/img/logo-mahsun-tailor.png"
          alt=""
        />
        <button onClick={handleToggle}>
          <img
            className="w-[38px] h-[38px] hover:scale-105 transition-all duration-100"
            src="/assets/icons/menu.svg"
            alt=""
          />
        </button>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } flex flex-col items-center border-t-[1px] shadow-md`}
      >
        <Link
          to={"/"}
          className="w-full text-center text-base py-2 text-primary bg-white hover:bg-stone-100 "
        >
          Beranda
        </Link>
        <Link
          to={"/products"}
          className="w-full text-center text-base py-2 text-primary bg-white hover:bg-stone-100"
        >
          Produk
        </Link>
        <Link
          to={"/booking"}
          className="w-full text-center text-base py-2 text-primary bg-white hover:bg-stone-100"
        >
          Booking
        </Link>
        <Link
          to={"/login"}
          className="w-full text-center text-base py-2 text-primary bg-white hover:bg-stone-100"
        >
          Tentang
        </Link>
        <div className="flex w-full bg-white py-3 justify-center gap-2">
          <SecondaryButton name={"Sign Up"} route={"/register"} />
          <BlueButton name={"Login"} route={"/login"} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
