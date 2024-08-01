function Select({ name, children }) {
  return (
    <select
      name={name}
      id={name}
      defaultValue=""
      className="custom-select w-full h-10 rounded-md px-3 mb-3 border bg-white border-primary border-opacity-20 text-sm text-primary focus:outline-sky-800 focus:outline-1"
    >
      {children}
    </select>
  );
}

export default Select;
