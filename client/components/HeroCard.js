import Image from "next/image";
import React from "react";

const HeroCard = ({ image, heading, text }) => {
  return (
    <div className="flex flex-col items-start justify-center space-y-4">
      <div className="flex items-center justify-center">
        <Image
          src={image}
          alt="Heading Image"
          height={300}
          width={300}
          className="rounded-lg"
        />
      </div>
      <h2 className="font-bold text-white text-2xl">{heading}</h2>
      <p className="text-gray-50 text-lg">{text}</p>
    </div>
  );
};

export default HeroCard;
