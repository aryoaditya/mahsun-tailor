function SecondaryButton({name}){
    return (
        <button className="mx-auto w-[100px] font-bold text-[13px] py-[7px] min-w-28 min-h-9 rounded-[10px] bg-stone-200 text-primary hover:shadow-lg hover:scale-[101%] transition-all duration-100">
          <p className="px-5">{name}</p>
        </button>
    )
};

export default SecondaryButton;