"use client";

import { useSearchParams } from "next/navigation";
import { ClientSafeProvider, signIn } from "next-auth/react";
import Image from "next/image";

import naverLogo from "public/images/naverLogo.png";

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
            className="flex flex-row justify-around items-center bg-[#03C75A] text-white font-base pl-6 pr-8 py-3 text-[18px] rounded-lg gap-x-3"
          >
            <Image src={naverLogo} width={36} alt="네이버 로고" />
            <span>Start with {provider.name}</span>
          </button>
        </div>
      ))}
    </div>
  );
}
