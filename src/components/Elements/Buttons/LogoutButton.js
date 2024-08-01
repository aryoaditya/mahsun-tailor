function LogoutButton({ name, handleLogout, device }) {
  return (
    <div
      className={`text-primary text-sm font-semibold bg-white ${
        device === "mobile"
          ? "flex justify-center items-center text-center w-full py-3 sm:hidden"
          : "hidden sm:flex sm:items-center"
      }`}
    >
      <p>hi, {name}</p>
      <button
        type="button"
        className="flex items-center justify-center px-2 py-1 ml-3 border border-slate-400 border-opacity-50 rounded-full"
        onClick={handleLogout}
      >
        <p className="text-xs font-medium text-black text-opacity-80 pl-[6px]">
          Log out
        </p>
        <img
          className="w-4 ml-1"
          src="/assets/icons/sign-out.svg"
          alt="sign-out"
        />
      </button>
    </div>
  );
}

export default LogoutButton;
