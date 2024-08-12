function Label(props) {
  const { label, htmlFor } = props;

  return (
    <label
      htmlFor={htmlFor}
      className="block text-primary font-normal text-[15px]"
    >
      {label}
    </label>
  );
}

export default Label;
