import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/userDashboard",
    text: "Home",
  },
  {
    id: 2,
    url: "/packages",
    text: "Packages",
  },
  {
    id: 3,
    url: "/destinations",
    text: "Destinations",
  },
  {
    id: 4,
    url: "/hotels",
    text: "Hotels",
  },
  {
    id: 5,
    url: "/about",
    text: "About",
  },
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
