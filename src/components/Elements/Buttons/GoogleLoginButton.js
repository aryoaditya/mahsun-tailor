function GoogleLoginButton() {
  return (
    <div className="flex flex-col justify-center mt-7">
      <div className="flex items-center justify-center">
        <hr className="w-1/5 max-w-20 border-stone-300" />
        <p className="mx-5 text-center font-normal text-[13px] text-primary">
          atau
        </p>
        <hr className="w-1/5 max-w-20 border-stone-300" />
      </div>

      <button className="flex items-center justify-center space-x-2 mt-6 mx-auto w-56 min-h-9 font-medium text-[13px] py-[7px] px-[15px] rounded-full bg-white text-primary border border-opacity-40 border-stone-400 hover:shadow-md hover:scale-[101%] transition-all duration-100">
        <img
          className="inline-block w-[17px] h-[17px]"
          src="/assets/icons/google.png"
          alt=""
        />
        <span>Login dengan Google</span>
      </button>
    </div>
  );
}

export default GoogleLoginButton;
