import Image from "next/image";
import React from "react";
import Head from "next/head";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = ({ user }) => {
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Head>
        <title>Techflix | Login</title>
      </Head>
      <div className="flex flex-col items-center justify-center p-10 space-y-4 border border-white rounded-lg">
        <Image
          src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"
          height={24}
          width={161}
          alt="Logo"
        />
        <p className="text-xl font-semibold tracking-wide text-white">Login or Register</p>
        <div className="flex flex-col w-64 space-y-4">
          <button
            className="w-full p-2 text-black transition-all duration-200 bg-white rounded-lg hover:bg-gray-100"
            onClick={() => signIn("google")}
          >
            Sign in with Google
          </button>
          <button
            className="w-full p-2 text-white transition-all duration-200 bg-purple-500 rounded-lg hover:bg-purple-600"
            onClick={() => signIn("discord")}
          >
            Sign in with Discord
          </button>
          <button
            className="w-full p-2 text-white transition-all duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
            onClick={() => signIn("facebook")}
          >
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }
  return {
    props: {
      user: session?.user,
    },
  };
}

export default Login;
