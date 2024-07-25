function SubTitle(props) {
  const { classname, children } = props;
  return (
    <h1
      className={`text-primary text-lg font-bold italic text-center flex items-center justify-center ${classname}`}
    >
      {children}
    </h1>
  );
}

export default SubTitle;
