"use client";
import { signOut, useSession } from "next-auth/react";
import ManualSearch from "./components/searchBlog/ManualSearch";
import WeddingPlanInitiation from "./sections/plan/WeddingPlanInitiation";

import StartButton from "./components/home/StartButton";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="flex grow flex-col justify-center items-center bg-slate-50 h-screen">
      <StartButton />
    </div>
  );
}
