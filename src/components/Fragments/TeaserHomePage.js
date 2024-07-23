import SubTitle from "../Elements/Title/SubTitle";
import BlueButton from "../Elements/Buttons/BlueButton";
import { Link } from "react-router-dom";

function TeaserHomePage(props) {
  const { img, subtitle, buttonName, route, routeBtn, targetBlank, children } =
    props;
  return (
    <div className="flex flex-col items-center mt-12 mx-8">
      <SubTitle classname={"absolute"}>{subtitle}</SubTitle>
      <Link to={route}>
        <img className="w-[240px]" src={`${img}`} alt="" />
      </Link>

      {children}

      <BlueButton name={buttonName} route={routeBtn} position={"mx-auto"} />
    </div>
  );
}

export default TeaserHomePage;
