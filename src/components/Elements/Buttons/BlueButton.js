function BlueButton(props) {
    const {name} = props;

    return (
        <button className="mt-[29px] mb-[11px] mx-auto w-[100px] font-bold text-[13px] py-[7px] px-[26px] rounded-[10px] bg-gradient-to-b from-gradient1 from-0% via-gradient2 via-70% to-gradient3 to-100% text-white hover:shadow-lg hover:scale-[101%] transition-all duration-100">
          {name}
        </button>
    )
}

export default BlueButton;