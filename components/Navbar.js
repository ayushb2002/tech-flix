import Image from "next/image";
import React from "react";
import Button from "./Button";

import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { adminAtom, authAtom } from "../atoms/authAtom";
import { signOut } from "next-auth/react";
import Link from "next/link";

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

    <nav className="w-full grid grid-flow-col text-center grid-rows-3 lg:grid-cols-4 lg:grid-flow-row items-center bg-transparent my-5">
      <div className="flex justify-center text-center px-5">
        <p className="px-44 text-center">
        <span className="text-4xl text-white">Tech</span>
        <span className="text-4xl text-red-500">Flix</span>
        </p>
      </div>
      <div className="flex justify-center text-center mx-auto col-span-2 w-full">
        <div className="grid space-x-3 grid-cols-5 grid-flow-row items-center">

          <div className="text-center p-1">
          <Link href="/" passHref>
             <div className="text-lg text-white cursor-pointer hover:text-red-500">
               Home
             </div>
           </Link>
           </div>

          <div className="text-center p-1">
          <Link href="/aboutus" passHref>
            <div className="text-lg text-white cursor-pointer hover:text-red-500">
               About Us
             </div>
           </Link>
          </div>

          <div className="text-center p-1">
          <Link href="/" passHref>
             <div className="text-lg text-white cursor-pointer hover:text-red-500">
               Contact Us
             </div>
           </Link>
          </div>


        <div className="col-span-2 text-center p-1">
        {(user || adminUser) && (
        <div>
          <form>
            <input
              className="w-full form-input"
              type="search"
              placeholder="Search for Videos"
            />
          </form>
        </div>
      )}
        </div>

        </div>
      </div>
      <div className="fext justify-center text-center mx-auto">
          
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
    </nav>

    // <div className="items-cemter grid grid-cols-3">
    //   <div className="flex justify-center">
    //   <div className="cursor-pointer" onClick={() => router.push("/")}>
    //     <div className="items-center justify-center hidden mt-6 md:flex">
    //       <span className="text-4xl text-white">Tech</span>
    //       <span className="text-4xl text-red-500">Flix</span>
    //     </div>
    //     <div className="flex items-center justify-center mt-6 md:hidden">
    //       <span className="text-3xl text-white">Tech</span>
    //       <span className="text-3xl text-red-500">Flix</span>
    //     </div>
    //   </div>
    // </div>
    // <div className="flex justify-center mt-5">
    //   {!user && !adminUser && (
    //     <div className="grid grid-cols-3 items-center justify-center space-x-5">
    //       <Link href="/" passHref>
    //         <div className="text-lg text-white cursor-pointer hover:text-red-500">
    //           Home
    //         </div>
    //       </Link>
    //       <Link href="/aboutus" passHref>
    //         <div className="text-lg text-white cursor-pointer hover:text-red-500">
    //           About Us
    //         </div>
    //       </Link>
    //       <Link href="/" passHref>
    //         <div className="text-lg text-white cursor-pointer hover:text-red-500">
    //           Contact Us
    //         </div>
    //       </Link>
    //     </div>
    //   )}
    // </div>

    // <div className="flex justify-center mt-5">
    //   {(user || adminUser) && (
    //     <div>
    //       <form>
    //         <input
    //           className="w-full form-input"
    //           type="search"
    //           placeholder="Search for Videos"
    //         />
    //       </form>
    //     </div>
    //   )}
    //   {user || adminUser ? (
    //     <div
    //       className="flex items-center justify-center gap-4 px-6 py-2 transition-all duration-200 rounded-full group hover:bg-gray-500 hover:cursor-pointer"
    //       onClick={logOut}
    //     >
    //       <span className="text-sm font-semibold text-white group-hover:cursor-pointer">
    //         {user?.name || adminUser?.name}
    //       </span>
    //       <Image
    //         src={user?.image || adminUser?.image}
    //         height={40}
    //         width={40}
    //         className="rounded-full group-hover:cursor-pointer"
    //         alt="Profile"
    //       />
    //     </div>
    //   ) : (
    //     <div>
    //       <Button text="Login" onClick={() => router.push("/login")} />
    //     </div>
    //   )}
    //   </div>
    // </div>
  );
};

export default Navbar;
