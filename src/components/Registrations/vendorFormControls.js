import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const apiUrl = "http://localhost:8080/vendor/sign-up-vendor";
const PostContactForm = async (values, successCallback, errorCallback) => {
  // do stuff
  // if successful
  if (true) successCallback();
  else errorCallback();
};

const initialFormValues = {
  fname: "",
  lname: "",
  company_name: "",
  address: "",
  pincode: "",
  city: "",
  state: "",
  mobno: "",
  email: "",
  password: "",
  formSubmitted: false,
  success: false,
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("fname" in fieldValues)
      temp.fname = fieldValues.fname ? "" : "First Name is required.";
    if ("lname" in fieldValues)
      temp.lname = fieldValues.lname ? "" : "Last Name is required.";
    if ("company_name" in fieldValues)
      temp.company_name = fieldValues.company_name
        ? ""
        : "Company Name is required.";
    if ("mobno" in fieldValues) {
      temp.mobno = fieldValues.mobno ? "" : "Phone Number is required.";
      if (fieldValues.mobno)
        temp.mobno = /^[0-9\b]+$/.test(fieldValues.mobno)
          ? ""
          : "Phone Number is not valid.";
    }
    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "Email is required.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    }
    if ("address" in fieldValues)
      temp.address = fieldValues.address ? "" : "Address is required.";

    if ("pincode" in fieldValues) {
      temp.pincode = fieldValues.pincode ? "" : "Pincode is required.";
      if (fieldValues.pincode)
        temp.pincode = /^[0-9\b]+$/.test(fieldValues.pincode)
          ? ""
          : "Pincode is not valid.";
    }
    if ("city" in fieldValues)
      temp.city = fieldValues.city ? "" : "City is required.";
    if ("state" in fieldValues)
      temp.state = fieldValues.state ? "" : "State is required.";

    if ("password" in fieldValues) {
      temp.password =
        fieldValues.password.length !== 0 ? "" : "Password is required.";
      if (
        !fieldValues.password.match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        //formIsValid = false;
        temp.password = "*Please enter secure and strong password.";
      }
    }
    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const handleSuccess = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true,
    });
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false,
    });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.fname &&
      fieldValues.lname &&
      fieldValues.company_name &&
      fieldValues.address &&
      fieldValues.pincode &&
      fieldValues.city &&
      fieldValues.state &&
      fieldValues.mobno &&
      fieldValues.email &&
      fieldValues.password &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  //   const Registration = (e) => {
  //     e.preventDefault();
  //     // debugger;
  //     const data1 = {
  //       fname: data.fname,
  //       lname: data.lname,
  //       address: data.address,
  //       mobno: data.mobno,
  //       email: data.email,
  //       password: data.password,
  //     };
  //     axios.post(apiUrl, data1).then((result) => {
  //       //  debugger;
  //       console.log(result.data);
  //       if (result.data.Status === "Invalid") alert("Invalid User");
  //       else {
  //         localStorage.setItem("user-info", JSON.stringify(result.data));
  //         props.history.push("/UserLogin");
  //       }
  //     });
  //   };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      // alert("You've posted your form!");

      await PostContactForm(values, handleSuccess, handleError);
      console.log("datavalue", values);
      const data1 = {
        fname: values.fname,
        lname: values.lname,
        company_name: values.company_name,
        address: values.address,
        pincode: values.pincode,
        city: values.city,
        state: values.state,
        mobno: values.mobno,
        email: values.email,
        password: values.password,
      };
      axios.post(apiUrl, data1).then((result) => {
        //  debugger;
        console.log(result.data);
        if (result.data.Status === "Invalid") alert(result.data.message);
        else {
          localStorage.setItem("vendor-info", JSON.stringify(result.data));
          alert(result.data.message);
          history.push("/VendorLogin");
        }
      });
    }
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
  };
};
