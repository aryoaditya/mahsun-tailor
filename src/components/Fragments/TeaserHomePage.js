import SubTitle from "../Elements/Title/SubTitle";
import BlueButton from "../Elements/Buttons/BlueButton";

function TeaserHomePage(props) {
  const { subtitle, buttonName, route, children } = props;
  return (
    <div className="flex flex-col items-center mt-12 mx-8">
      <SubTitle classname={"absolute"}>{subtitle}</SubTitle>

      {children}

      <div className="text-[13px]">
        <BlueButton name={buttonName} route={route} />
      </div>
    </div>
  );
}

export default TeaserHomePage;
