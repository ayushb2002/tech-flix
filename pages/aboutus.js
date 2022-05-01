import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import TeamCard from "../components/TeamCard";

import teamData from "../teamData";

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>About Us | Techflix</title>
      </Head>
      <Navbar />
      {/* Main Body Container */}
      <div className="flex flex-col items-center justify-center my-6">
        <div className="bg-[#fff] rounded-xl md:items-center md:justify-center p-8 md:p-2 dark:bg-[#fff] w-[50%] md:flex">
          <Image
            className="mx-auto rounded-full "
            alt="Founder"
            src="/img/founder.jpeg"
            width={140}
            height={160}
          />
          <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
            <blockquote>
              <p className="text-lg font-medium text-black">
                &quot;Hustle beats Talent when Talent doesn&apos;t Hustle&quot;
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-red-500 dark:text-red-500">
                Lakshay Arora
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                Founder, TechFlix
              </div>
            </figcaption>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col items-center justify-center mt-20">
          <h2 className="text-3xl font-bold text-white">Our Vision</h2>
          <p className="m-32 mt-6 text-xl text-white ">
            <p className="text-center">
              &quot;<strong>We are a revolutionary community.</strong>&quot;
            </p>
            <p className="mt-3">
              At TechFlix our aim is to get your grades in Academics while you
              are hustling to achieve it. Do you want your journey from Zero to
              Hero, Is it possible? Yes yes, it is, kickstart your journey from
              today & start learning.{" "}
              <span className="text-red-500 cursor-pointer">#phodenge</span>{" "}
              <span className="text-red-500 cursor-pointer">#hustle</span>
            </p>
          </p>
        </div>

        {/* Team */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-white">Our Team of Experts</h2>
          {teamData.map((team, idx) => (
            <div className="flex flex-col" key={idx}>
              <h3 className="mt-6 text-2xl font-bold text-center text-white">
                {team.teamName}
              </h3>
              <div
                className={`grid ${
                  team.members.length === 1
                    ? "grid-cols-1"
                    : `grid-cols-1 md:space-x-4 md:grid-cols-${
                        team.members.length >= 5 ? 4 : team.members.length
                      } lg:grid-cols-${
                        team.members.length >= 5 ? 4 : team.members.length
                      } xl:grid-cols-${
                        team.members.length >= 5 ? 4 : team.members.length
                      }`
                }`}
              >
                {team.members.map((member, idx) => (
                  <TeamCard
                    key={idx}
                    name={member.name}
                    socials={member?.socials}
                    designation={team?.designation}
                    image={member.image}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Navbar
// Tagline (As a quote)
// Vision
// Team Cards

export default AboutUs;
