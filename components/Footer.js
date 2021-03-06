import Image from "next/image";
import React from "react";
import IconView from "./IconView";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const subs = ["College Sems", "DSA", "DBMS", "SDF", "Web Dev for College"];
  return (
    <div className="flex items-start justify-around py-10">
      <div className="flex flex-col items-start justify-center space-y-8">
        <div className="flex flex-row">
          <span className="text-4xl text-white">Tech</span>
          <span className="text-4xl text-red-500">Flix</span>
        </div>
        <div className="flex items-start space-x-4">
          <IconView Icon={FaFacebookF} link="https://facebook.com/" /> {/* INOP */}
          <IconView Icon={FaYoutube} link="https://www.youtube.com/channel/UCSEIa4fboxO7IMtHEo8jePg" />
          <IconView Icon={FaTwitter} link="https://twitter.com/" /> {/* INOP */}
          <IconView Icon={FaInstagram} link="https://www.instagram.com/tech_flix_community/" />
          <IconView Icon={FaLinkedin} link="https://www.linkedin.com/company/tech-flix/" />
        </div>
        <div>
            <p className="text-sm text-gray-50">&copy; 2022 Techflix</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center space-y-6">
        <span className="font-semibold text-gray-50">Company</span>
        <ul className="space-y-4 list-none">
          <li className="text-white cursor-pointer hover:text-red-500">
            About Us
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start justify-center space-y-6">
        <span className="font-semibold text-gray-50">Popular Content</span>
        <ul className="space-y-4 list-none">
          {subs.map((sub, index) => (
            <li
              className="text-white cursor-pointer hover:text-red-500"
              key={index}
            >
              {sub}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-start justify-center space-y-6">
        <span className="font-semibold text-gray-50">Other Links</span>
        <ul className="space-y-4 list-none">
          <li className="text-white cursor-pointer hover:text-red-500">
            Site Map
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
