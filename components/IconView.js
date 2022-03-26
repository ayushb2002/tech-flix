import Link from "next/link";
import React from "react";

const IconView = ({ Icon, link }) => {
  return (
    <Link href={link} passHref>
      <a target="_blank">
        <div className="flex flex-col items-center justify-center p-2 transition-all duration-200 bg-gray-800 rounded-full hover:bg-gray-900">
          <Icon className="text-white transition-all duration-200 hover:text-red-500" />
        </div>
      </a>
    </Link>
  );
};

export default IconView;
