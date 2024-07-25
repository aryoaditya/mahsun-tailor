import { Link } from "react-router-dom";

function SecondaryButton({ name, route }) {
  return (
    <Link
      to={route}
      className="w-[100px] font-bold text-[13px] py-[7px] min-w-28 min-h-9 rounded-full bg-stone-200 text-primary hover:shadow-lg hover:scale-[101%] transition-all duration-100"
    >
      <p className="inline-block px-5 text-center align-middle w-full">
        {name}
      </p>
    </Link>
  );
}

export default SecondaryButton;
