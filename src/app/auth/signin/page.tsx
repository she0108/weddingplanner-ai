import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";

import SocialSigninButton from "@/app/components/auth/SocialSignInButton";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return (
    <>
      <div className="m-4">
        <SocialSigninButton providers={providers!} />
      </div>
    </>
  );
}
