function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 shadow-sm">
      <div className="p-3 flex justify-between items-center bg-white">
        <img
          className="w-[111px]"
          src="/assets/img/logo-mahsun-tailor.png"
          alt=""
        />
        <button>
          <img
            className="w-[38px] h-[38px]"
            src="/assets/icons/Menu Icon.png"
            alt=""
          />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
