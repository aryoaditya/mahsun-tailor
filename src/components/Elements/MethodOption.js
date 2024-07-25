function MethodOption(props) {
  const { subtitle, img, name } = props;
  return (
    <div className=" w-full text-primary">
      <div className="flex justify-between items-center ">
        <h1 className="text-base font-semibold mb-[6px]">{subtitle}</h1>
        <button className="text-xs font-semibold text-blue-700 hover:text-blue-800">
          Lihat Semua
        </button>
      </div>
      <div className=" flex flex-row min-h-[70px] mb-9 rounded-lg bg-background border border-slate-200 hover:shadow-sm">
        <div className="w-28 flex items-center justify-center">
          <img
            className="w-[66px] bg-white h-11 rounded-md object-contain object-center"
            src={`/assets/img/${img}.png`}
            alt={img}
          />
        </div>
        <div className=" flex-grow ml-8 my-auto font-semibold text-16">
          {name}
        </div>
      </div>
    </div>
  );
}

export default MethodOption;
