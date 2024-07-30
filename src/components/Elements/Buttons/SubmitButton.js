function SubmitButton(props) {
  const { name } = props;

  return (
    <button
      className="min-w-28 font-bold py-[7px] flex items-center rounded-full bg-gradient-to-b from-gradient1 from-0% via-gradient2 via-70% to-gradient3 to-100% text-white hover:shadow-lg hover:scale-[101%] transition-all duration-100"
      type="submit"
    >
      <p className="inline-block px-5 text-center w-full">{name}</p>
    </button>
  );
}

export default SubmitButton;
