function ProductCard(props) {
  const { productType, price, img, cut } = props;
  return (
    <div className="w-full mb-3">
      <img
        src={`${img}`}
        alt="jas-pria"
        className={`w-full h-[187px] rounded-lg object-cover ${cut} sm:h-52 md:h-64 lg:h-72`}
      />
      <div className="flex justify-between text-primary text-[15px] px-3 font-medium sm:text-base">
        <p>{productType}</p>
        <p className="italic">{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
