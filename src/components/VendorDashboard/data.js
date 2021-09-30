import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/VendorDashboard",
    text: "Home",
  },
  {
    id: 2,
    url: "/vendorpackages",
    text: "Packages",
  },
  // {
  //   id: 3,
  //   url: "/vendorhotels",
  //   text: "Hotels",
  // },
  // {
  //   id: 4,
  //   url: "/vendorabout",
  //   text: "About",
  // },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
];
