import { Link } from "react-router-dom";

function BlueButton(props) {
  const { name, route } = props;

  return (
    <Link
      to={route}
      className="min-w-28 min-h-9 font-bold text-[13px] py-[7px] rounded-full bg-gradient-to-b from-gradient1 from-0% via-gradient2 via-70% to-gradient3 to-100% text-white hover:shadow-lg hover:scale-[101%] transition-all duration-100"
    >
      <p className="inline-block px-5 text-center align-middle w-full">
        {name}
      </p>
    </Link>
  );
}

export default BlueButton;
