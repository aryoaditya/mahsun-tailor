function Input(props) {
  const { type, name, placeholder } = props;

  return (
    <input
      type={type}
      name={name}
      id=""
      placeholder={placeholder}
      className="w-full h-10 rounded-md px-3 mb-3 border border-primary border-opacity-20 text-sm text-primary focus:outline-sky-800 focus:outline-1"
    />
  );
}

export default Input;
