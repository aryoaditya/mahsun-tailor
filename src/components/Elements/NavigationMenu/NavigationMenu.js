import { Link } from "react-router-dom";

function NavigationMenu(props) {
  const { route, text, navClass } = props;
  return (
    <Link
      to={route}
      className={`${navClass} w-20 text-center text-base p-2 text-primary hover:font-bold`}
    >
      {text}
    </Link>
  );
}

export default NavigationMenu;
