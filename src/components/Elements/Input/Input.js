function Input(props) {
  const { type, name, placeholder, defaultValue = "", onChange = "" } = props;

  if (defaultValue === "" && onChange === "") {
    return (
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="w-full h-10 rounded-md px-3 mb-3 border border-primary border-opacity-20 text-sm text-primary focus:outline-sky-800 focus:outline-1"
      />
    );
  } else {
    return (
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        className="w-full h-10 rounded-md px-3 mb-3 border border-primary border-opacity-20 text-sm text-primary focus:outline-sky-800 focus:outline-1"
      />
    );
  }
}

export default Input;
