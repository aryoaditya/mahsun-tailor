import { Link } from "react-router-dom";

function NavigationMenu(props) {
  const { route, text } = props;
  return (
    <Link
      to={route}
      className="w-20 text-center text-base p-2 text-primary font-medium hover:font-bold"
    >
      {text}
    </Link>
  );
}

export default NavigationMenu;
