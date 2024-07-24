import ProductCard from "../Fragments/ProductCard";
import PageTitle from "../Elements/Title/PageTitle";

function ProductPageLayout() {
  return (
    <main className="flex flex-col flex-1 px-7 pt-28 pb-12 min-h-screen items-center bg-background">
      <PageTitle title={"Produk"} />
      <ProductCard
        productType={"Jas Pria"}
        price={"Mulai dari Rp. 1.099.000"}
        img={"/assets/img/men-suit.jpg"}
        cut={"object-buttom"}
      />
      <ProductCard
        productType={"Kebaya"}
        price={"Mulai dari Rp. 1.099.000"}
        img={"/assets/img/kebaya.jpg"}
        cut={"object-center"}
      />
      <ProductCard
        productType={"Dress"}
        price={"Mulai dari Rp. 1.099.000"}
        img={"/assets/img/dress.jpg"}
        cut={"object-buttom"}
      />
      <ProductCard
        productType={"Custom"}
        price={"Menyesuaikan ..."}
        img={"/assets/img/fabrics.jpg"}
        cut={"object-center"}
      />
      <ProductCard
        productType={"Lain-lain"}
        price={"Menyesuaikan ..."}
        img={"/assets/img/sport-jacket.jpg"}
        cut={"object-center"}
      />
    </main>
  );
}

export default ProductPageLayout;
