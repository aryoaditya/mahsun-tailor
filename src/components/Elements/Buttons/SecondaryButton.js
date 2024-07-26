import { Link } from "react-router-dom";

function SecondaryButton({ name, route }) {
  return (
    <Link
      to={route}
      className="min-w-28 font-bold py-[7px] flex items-center rounded-full bg-stone-200 text-primary hover:shadow-lg hover:scale-[101%] transition-all duration-100"
    >
      <p className="inline-block px-5 text-center w-full">{name}</p>
    </Link>
  );
}

export default SecondaryButton;
