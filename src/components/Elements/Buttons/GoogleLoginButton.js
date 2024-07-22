function GoogleLoginButton() {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex items-center justify-center mt-[25px]">
                <hr className="w-1/5 border-stone-300" />
                <p className="mx-5 text-center font-normal text-[13px] text-primary">atau</p>
                <hr className="w-1/5 border-stone-300" />
            </div>

            <button className="flex items-center justify-center space-x-2 mt-[25px] mx-auto w-56 font-medium text-[13px] py-[7px] px-[15px] rounded-[10px] bg-white text-primary border border-opacity-40 border-stone-400 hover:shadow-md hover:scale-[101%] transition-all duration-100">
                <img className="inline-block w-[17px] h-[17px]" src="google.png" alt="" />
                <span>Login dengan Google</span>
            </button>
        </div>
    )
};

export default GoogleLoginButton;