function IntroTitle(props) {
  const { children } = props;
  return (
    <h1 className="text-primary text-2xl font-bold italic text-center mt-20 md:text-3xl lg:text-4xl lg:mt-24">
      {children}
    </h1>
  );
}

export default IntroTitle;
