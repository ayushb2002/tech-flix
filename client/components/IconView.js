import Link from "next/link";
import React from "react";

const IconView = ({ Icon, link }) => {
  return (
    <Link href={link} passHref>
      <a target="_blank">
        <div className="flex flex-col items-center justify-center rounded-full bg-gray-800 hover:bg-gray-900 transition-all duration-200 p-2">
          <Icon className="text-white" />
        </div>
      </a>
    </Link>
  );
};

export default IconView;
