import Image from "next/image";
import React from "react";
import Button from "./Button";

import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { authAtom } from "../atoms/authAtom";

const Navbar = () => {
  const [user, setUser] = useRecoilState(authAtom);
  const router = useRouter();
  const logOut = () => {
    setUser(null);
    router.push('/');
  }
  return (
    <div className="flex flex-row items-center justify-between space-y-10 px-28">
      <div className="cursor-pointer" onClick={() => router.push("/")}>
        <div className="items-center justify-center hidden md:flex">
          <Image
            src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"
            alt="Logo"
            height={24}
            width={161}
          />
        </div>
        <div className="flex items-center justify-center md:hidden">
          <Image
            src="https://static.uacdn.net/production/_next/static/images/Mobile-Logo.svg?q=75&w=32"
            alt="Logo"
            height={24}
            width={30}
          />
        </div>
      </div>

      {user ? (
        <div className="flex items-center justify-center gap-4 px-6 py-2 transition-all duration-200 rounded-full group hover:bg-gray-500 hover:cursor-pointer" onClick={logOut}>
          <span className="text-sm font-semibold text-white group-hover:cursor-pointer">
            {user?.displayName}
          </span>
          <Image
            src={user?.photoURL}
            height={40}
            width={40}
            className="rounded-full group-hover:cursor-pointer"
            alt="Profile"
          />
        </div>
      ) : (
        <div>
          <Button text="Login" onClick={() => router.push("/login")} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
