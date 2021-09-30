import React from "react";
import './Register.css'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Register() {

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
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link to="/">
            User Registration
          </Link>
        </li>

        <li className={splitLocation[1] === "VendorRegistration" ? "active" : ""}>
          <Link to="/VendorRegistration">
            Vendor Registration
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Register;
