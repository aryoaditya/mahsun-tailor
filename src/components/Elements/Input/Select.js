function Select({ children }) {
  return (
    <select
      name="measurement"
      id="measurement"
      className="custom-select w-full h-10 rounded-md px-3 mb-3 border bg-white border-primary border-opacity-20 text-sm text-primary focus:outline-sky-800 focus:outline-1"
    >
      {children}
    </select>
  );
}

export default Select;
