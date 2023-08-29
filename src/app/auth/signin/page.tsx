import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import Image from "next/image";

import bouquetBackground from "public/images/bouquet_bg.png";

import SocialSigninButton from "@/app/components/auth/SocialSignInButton";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    return { redirect: { destination: "/plan" } };
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
