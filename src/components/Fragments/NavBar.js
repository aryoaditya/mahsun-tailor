function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 shadow-sm">
            <div className="p-3 flex justify-between items-center bg-white">
                <img className="w-[111px]" src="logo-mahsun-tailor.png" alt="" />
                <button><img className="w-[38px] h-[38px]" src="Menu icon.png" alt="" /></button>
            </div>
        </nav>
    );
}

export default NavBar;