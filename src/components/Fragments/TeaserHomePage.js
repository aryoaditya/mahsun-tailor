import SubTitle from "../Elements/Title/SubTitle";
import BlueButton from "../Elements/Buttons/BlueButton";

function TeaserHomePage(props) {
  const { img, subtitle, buttonName, children } = props;
  return (
    <div className="flex flex-col items-center mt-12 mx-8">
      <SubTitle classname={"absolute"}>{subtitle}</SubTitle>
      <img className="w-[240px]" src={`${img}`} alt="" />

      {children}

      <BlueButton name={buttonName} />
    </div>
  );
}

export default TeaserHomePage;
