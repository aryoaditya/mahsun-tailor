import BlueButton from "../Elements/Buttons/BlueButton";

function TeaserHomePage(props) {
  const { buttonName, route, children } = props;
  return (
    <div className="flex flex-col items-center mt-12 mx-8 md:mt-16 lg:mt-20">
      {children}

      <div className="text-[13px]">
        <BlueButton name={buttonName} route={route} />
      </div>
    </div>
  );
}

export default TeaserHomePage;
