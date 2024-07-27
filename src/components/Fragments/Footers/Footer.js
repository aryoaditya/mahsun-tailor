function Footer() {
  return (
    <footer className="flex flex-col w-screen pb-7">
      <hr className="w-full border-stone-200 mx-auto mb-7" />
      {/* Footer Content under hr line */}
      <div className="flex flex-col items-center w-full px-3  sm:flex-row sm:justify-between sm:items-center sm:px-10 md:px-14 lg:px-16">
        <div className="w-2/3 text-xs text-center sm:text-left">
          <p className="font-bold">Hubungi kami:</p>
          <p className="font-normal">081312387123</p>
          <p className="font-normal">
            Jl. Jalan Cipinang Muara, Jatinegara, Jakarta Timur.
          </p>
        </div>

        <div className="w-1/3 flex flex-col items-center mt-8 sm:mt-0 sm:items-end">
          <img
            className="w-14 mb-1 opacity-90"
            src="/assets/img/logo-mahsun-tailor.png"
            alt=""
          />
          <p className="font-normal text-xs text-center">
            © 2024, Mahsun Tailor
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
