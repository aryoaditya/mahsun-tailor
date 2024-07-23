import IntroTitle from "../Elements/Title/IntroTitle";
import TeaserHomePage from "../Fragments/TeaserHomePage";
import { Link } from "react-router-dom";

function HomeLayout() {
  return (
    <main className="flex flex-col flex-1 px-[18px] pt-10 pb-12 min-h-screen">
      <IntroTitle>
        Jasa Pembuatan Busana Terpercaya dan Berkualitas Sejak Tahun 2000
      </IntroTitle>
      <TeaserHomePage
        subtitle={"Temukan model busanamu"}
        buttonName={"Lihat Selengkapnya"}
        route={"/products"}
      >
        <Link to="/products">
          <img className="w-[240px]" src="/assets/img/busana.png" alt="" />
        </Link>
        <p className="text-center font-normal text-[15px] mt-3">
          Menawarkan jasa pembuatan busana dengan berbagai model sesuai yang
          kamu inginkan, meliputi{" "}
          <span className="font-bold text-primary">
            kebaya, jas, celana, blouse, dress,
          </span>{" "}
          dan berbagai{" "}
          <span className="font-bold text-primary">jenis busana lainnya</span>.
        </p>
        <p className="text-center font-normal text-[15px] mb-6">
          Dengan mengutamakan detail dan kualitas tinggi dengan harga yang
          terjangkau.
        </p>
      </TeaserHomePage>

      <TeaserHomePage
        subtitle={"Temukan lokasi kami"}
        buttonName={"Booking Sekarang"}
        route={"/login"}
      >
        <Link to={"https://maps.app.goo.gl/xxNcumaM3xB1fGFeA"} target="_blank">
          <img className="w-[240px]" src="/assets/img/Lokasi.png" alt="" />
        </Link>
        <p className="text-center font-normal text-[15px] mt-3">
          Datang ke tempat? Panggil penjahit?
        </p>
        <p className="text-center font-normal text-[15px] mt-3 mb-6">
          Ya, kami melayani customer datang ke lokasi penjahit, atau kami yang
          datang ke rumahmu
        </p>
      </TeaserHomePage>
    </main>
  );
}

export default HomeLayout;
