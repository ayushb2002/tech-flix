import Image from "next/image";
import React from "react";
import Button from "./Button";

import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { adminAtom, authAtom } from "../atoms/authAtom";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const [user, setUser] = useRecoilState(authAtom);
  const [adminUser, setAdminUser] = useRecoilState(adminAtom);
  const router = useRouter();
  const logOut = () => {
    if (user) {
      setUser(null);
      signOut({ redirect: false, callbackUrl: "/login" });
    }
    if (adminUser) {
      setAdminUser(null);
    }
    router.push("/");
  };
  return (
    <div className="flex flex-row items-center justify-between space-y-10 px-28">
      <div className="cursor-pointer" onClick={() => router.push("/")}>
        <div className="items-center justify-center hidden mt-6 md:flex">
          <span className="text-4xl text-white">Tech</span>
          <span className="text-4xl text-red-500">Flix</span>
        </div>
        <div className="flex items-center justify-center mt-6 md:hidden">
          <span className="text-3xl text-white">Tech</span>
          <span className="text-3xl text-red-500">Flix</span>
        </div>
      </div>

      {user || adminUser ? (
        <div
          className="flex items-center justify-center gap-4 px-6 py-2 transition-all duration-200 rounded-full group hover:bg-gray-500 hover:cursor-pointer"
          onClick={logOut}
        >
          <span className="text-sm font-semibold text-white group-hover:cursor-pointer">
            {user?.name || adminUser?.name}
          </span>
          <Image
            src={user?.image || adminUser?.image}
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
