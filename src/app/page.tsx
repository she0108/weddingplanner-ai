// "use client";
// import { signOut, useSession } from "next-auth/react";
// import ManualSearch from "./components/searchBlog/ManualSearch";

// import StartButton from "./components/home/StartButton";

// export default function Home() {
//   const { data: session } = useSession();
//   return (
//     <div className="flex grow flex-col justify-center items-center bg-slate-50 h-screen">
//       <StartButton />
//     </div>
//   );
// }

import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";

import bouquetBackground from "public/images/bouquet_bg.png";

import SocialSigninButton from "@/app/components/auth/SocialSignInButton";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return (
    <>
      <div className="flex grow flex-col justify-center items-center bg-slate-50 h-screen">
        <Image src={bouquetBackground} width={320} alt="부케 사진" />
        <SocialSigninButton providers={providers!} />
      </div>
    </>
  );
}
