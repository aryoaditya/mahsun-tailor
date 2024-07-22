function SecondaryButton({name}){
    return (
        <button className="mx-auto w-[100px] font-bold text-[13px] py-[7px] px-[15px] rounded-[10px] bg-stone-200 text-primary hover:shadow-lg hover:scale-[101%] transition-all duration-100">
          {name}
        </button>
    )
};

export default SecondaryButton;