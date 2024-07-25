import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="font-medium text-xs text-end text-blue-700 hover:text-blue-800">
      <Link to="/forgot-password">Lupa password</Link>
    </div>
  );
}

export default ForgotPassword;
