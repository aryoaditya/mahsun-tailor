function ProductCard(props) {
  const { productType, price, img, cut } = props;
  return (
    <div className="w-full mb-3">
      <img
        src={`${img}`}
        alt="jas-pria"
        className={`w-full h-[187px] rounded-lg object-cover ${cut}`}
      />
      <div className="flex justify-between text-primary text-[15px] px-3">
        <p>{productType}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
