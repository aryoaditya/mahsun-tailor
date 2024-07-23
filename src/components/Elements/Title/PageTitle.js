function PageTitle(props) {
  const { children } = props;
  return (
    <h1 className="text-primary text-[21px] font-bold text-center mt-28 mb-9">
      {children}
    </h1>
  );
}

export default PageTitle;
