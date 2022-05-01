import Link from "next/link";
import React from "react";

const TeamCard = ({ name, image, designation, socials }) => {
  return (
    <div className="flex flex-col max-w-md px-10 py-8 mt-4 bg-white rounded-md shadow-md md:px-8">
      <div className="flex flex-col gap-6 md:flex-grow md:gap-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-32 h-32 mx-auto border-2 border-gray-500 rounded-full"
          src={image}
          alt={name}
        />
        <div className="flex flex-col text-center md:text-left">
          <p className="text-xl font-medium text-center text-red-500">{name}</p>
          {designation && (
            <p className="font-medium text-center text-gray-700 text-md">
              {designation}
            </p>
          )}
        </div>
        <div className="flex flex-row items-center justify-center mx-auto space-x-4">
          {socials &&
            socials.map((social, idx) => (
              <Link className="cursor-pointer" key={idx} href={social?.link} passHref>
                {social.icon}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
