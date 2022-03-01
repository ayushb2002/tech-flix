import Image from "next/image";
import React from "react";
import IconView from "./IconView";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const subs = ["College Sems", "DSA", "DBMS", "SDF", "Web Dev for College"];
  return (
    <div className="flex items-center justify-around py-10">
      <div className="flex flex-col items-start justify-center space-y-8">
        <Image
          src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"
          alt="Logo"
          height={24}
          width={161}
        />
        <div className="flex items-start space-x-4">
          <IconView Icon={FaFacebookF} link="https://facebook.com/" />
          <IconView Icon={FaYoutube} link="https://youtube.com/" />
          <IconView Icon={FaTwitter} link="https://twitter.com/" />
          <IconView Icon={FaInstagram} link="https://instagram.com/" />
          <IconView Icon={FaLinkedin} link="https://linkedin.com/" />
        </div>
        <div>
            <p className="text-gray-50 text-sm">&copy; 2022 Techflix</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center space-y-6">
        <span className="text-gray-50 font-semibold">Company</span>
        <ul className="list-none space-y-4">
          <li className="text-white cursor-pointer hover:text-green-500">
            About Us
          </li>
          <li className="text-white cursor-pointer hover:text-green-500">
            Blogs
          </li>
          <li className="text-white cursor-pointer hover:text-green-500">
            Privacy Policy
          </li>
          <li className="text-white cursor-pointer hover:text-green-500">
            Terms and Conditions
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start justify-center space-y-6">
        <span className="text-gray-50 font-semibold">Popular Content</span>
        <ul className="list-none space-y-4">
          {subs.map((sub, index) => (
            <li
              className="text-white cursor-pointer hover:text-green-500"
              key={index}
            >
              {sub}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-start justify-center space-y-6">
        <span className="text-gray-50 font-semibold">Other Links</span>
        <ul className="list-none space-y-4">
          <li className="text-white cursor-pointer hover:text-green-500">
            User Guidelines
          </li>
          <li className="text-white cursor-pointer hover:text-green-500">
            Site Map
          </li>
          <li className="text-white cursor-pointer hover:text-green-500">
            Refund Policy
          </li>
          <li className="text-white cursor-pointer hover:text-green-500">
            Takedown Policy
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
