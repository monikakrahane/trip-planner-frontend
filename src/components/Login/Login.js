import React from "react";
import "../Registrations/Register.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Login() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div className="register-container">
      <ul className="ul-cont">
        {/* Checking the current path name using javascript ternary operator and if true adding active classname to it */}
        <li className={splitLocation[1] === "UserLogin" ? "active" : ""}>
          <Link to="/UserLogin">User Login</Link>
        </li>

        <li className={splitLocation[1] === "VendorLogin" ? "active" : ""}>
          <Link to="/VendorLogin">Vendor Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Login;
