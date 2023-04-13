"use client";
import { signOut } from "next-auth/react";

const Signout = () => {
  return (
    <button
      onClick={() => signOut()}
      className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-4 rounded"
    >
      Sign out
    </button>
  );
};

export default Signout;
