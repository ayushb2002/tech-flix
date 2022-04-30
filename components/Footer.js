import Image from "next/image";
import React from "react";
import IconView from "./IconView";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const subs = ["College Sems", "DSA", "DBMS", "SDF", "Web Dev for College"];
  return (
    <div className="flex items-center justify-around py-10">
      <div className="flex flex-col items-start justify-center space-y-8">
        <div className="flex flex-row">
          <span className="text-4xl text-white">Tech</span>
          <span className="text-4xl text-red-500">Flix</span>
        </div>
        <div className="flex items-start space-x-4">
          <IconView Icon={FaFacebookF} link="https://facebook.com/" />
          <IconView Icon={FaYoutube} link="https://youtube.com/" />
          <IconView Icon={FaTwitter} link="https://twitter.com/" />
          <IconView Icon={FaInstagram} link="https://instagram.com/" />
          <IconView Icon={FaLinkedin} link="https://linkedin.com/" />
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
          <li className="text-white cursor-pointer hover:text-red-500">
            Blogs
          </li>
          <li className="text-white cursor-pointer hover:text-red-500">
            Privacy Policy
          </li>
          <li className="text-white cursor-pointer hover:text-red-500">
            Terms and Conditions
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
            User Guidelines
          </li>
          <li className="text-white cursor-pointer hover:text-red-500">
            Site Map
          </li>
          <li className="text-white cursor-pointer hover:text-red-500">
            Refund Policy
          </li>
          <li className="text-white cursor-pointer hover:text-red-500">
            Takedown Policy
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
