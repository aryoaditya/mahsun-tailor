function BlueButton(props) {
  const { name } = props;

  return (
    <button className="min-w-28 min-h-9 mx-auto font-bold text-[13px] py-[7px] rounded-full bg-gradient-to-b from-gradient1 from-0% via-gradient2 via-70% to-gradient3 to-100% text-white hover:shadow-lg hover:scale-[101%] transition-all duration-100">
      <p className="px-5">{name}</p>
    </button>
  );
}

export default BlueButton;
