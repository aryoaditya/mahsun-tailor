import { Link } from "react-router-dom";

function NavigationToggleMenu(props) {
  const { route, text, navClass } = props;
  return (
    <Link
      to={route}
      className={`${navClass} w-full text-center bg-white text-base py-2 text-primary hover:bg-stone-100 sm:py-4`}
    >
      {text}
    </Link>
  );
}

export default NavigationToggleMenu;
