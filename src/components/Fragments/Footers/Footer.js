function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center pb-7 px-3">
      <hr className="w-11/12 border-stone-200 mx-auto mb-7" />
      <p className="font-bold text-xs text-center">Hubungi kami:</p>
      <p className="font-normal text-xs text-center">081312387123</p>
      <p className="font-normal text-xs text-center">
        Jl. Jalan Cipinang Muara, Jatinegara, Jakarta Timur.
      </p>

      <img
        className="w-14 mt-8 mb-1 opacity-90"
        src="/assets/img/logo-mahsun-tailor.png"
        alt=""
      />

      <p className="font-normal text-xs text-center">© 2024, Mahsun Tailor</p>
    </footer>
  );
}

export default Footer;
