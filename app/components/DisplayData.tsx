"use client";
import { useSession } from "next-auth/react";

const Display = () => {
  const { data: session, status } = useSession();

  console.log(status);
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
};

export default Display;
