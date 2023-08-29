"use client";

import { signIn } from "next-auth/react";

export default function StartButton() {
  return (
    <div>
      <button
        onClick={() => signIn()}
        className="w-full flex flex-row justify-center items-center shadow-md p-4 text-center align-center bg-white rounded-xl"
      >
        Wedding Planner AI 시작하기
      </button>
    </div>
  );
}
