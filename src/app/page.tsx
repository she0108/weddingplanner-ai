"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import ManualSearch from "./components/searchBlog/ManualSearch";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
      <ManualSearch />
    </div>
  );
}
