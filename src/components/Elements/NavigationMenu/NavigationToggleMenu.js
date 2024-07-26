import { Link } from "react-router-dom";

function NavigationToggleMenu(props) {
  const { route, text } = props;
  return (
    <Link
      to={route}
      className="w-full text-center text-base py-2 text-primary bg-white hover:bg-stone-100 sm:py-4"
    >
      {text}
    </Link>
  );
}

export default NavigationToggleMenu;
