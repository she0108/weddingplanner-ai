"use client";

import { useSearchParams } from "next/navigation";
import { ClientSafeProvider, signIn } from "next-auth/react";

type Props = {
  providers: Record<string, ClientSafeProvider>;
};

export default function SocialSigninButton({ providers }: Props) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  console.log(searchParams);
  console.log(callbackUrl);

  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() =>
              signIn(provider.id, { callbackUrl: callbackUrl || undefined })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}
