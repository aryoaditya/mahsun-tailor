import { Link } from "react-router-dom";

function BookingIcon(props) {
  const { iconName, title } = props;

  return (
    <div className="w-[75px] h-[75px] rounded-md hover:bg-primary hover:bg-opacity-10 flex items-center justify-center">
      <Link to="/booking" className="flex flex-col justify-center items-center">
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
