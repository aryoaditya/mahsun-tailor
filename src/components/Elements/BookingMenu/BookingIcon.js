import { Link } from "react-router-dom";

function BookingIcon(props) {
  const { iconName, title, route, menuClass } = props;

  return (
    <div
      className={`${menuClass} w-[75px] h-[75px] rounded-md flex items-center justify-center`}
    >
      <Link to={route} className="flex flex-col justify-center items-center">
        <img
          className="h-6 w-auto"
          src={`/assets/icons/${iconName}.svg`}
          alt={iconName}
        />
        <p className="font-bold text-[13px] text-primary pt-2">{title}</p>
      </Link>
    </div>
  );
}

export default BookingIcon;
